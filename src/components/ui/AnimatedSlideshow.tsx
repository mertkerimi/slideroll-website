import * as React from "react"
import { MotionConfig, motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

/* ─── Context ──────────────────────────────────────── */
interface HoverSliderCtx { activeSlide: number; changeSlide: (i: number) => void }
const HoverSliderContext = React.createContext<HoverSliderCtx | undefined>(undefined)

function useHoverSlider() {
  const ctx = React.useContext(HoverSliderContext)
  if (!ctx) throw new Error("Must be inside HoverSlider")
  return ctx
}

function splitChars(text: string) {
  return text.split(" ").map(w => w + " ").join("").split("")
}

/* ─── Root ─────────────────────────────────────────── */
export const HoverSlider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const changeSlide = React.useCallback((i: number) => setActiveSlide(i), [])
  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div ref={ref} {...props}>{children}</div>
    </HoverSliderContext.Provider>
  )
})
HoverSlider.displayName = "HoverSlider"

/* ─── Stagger text ─────────────────────────────────── */
export const TextStaggerHover = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { text: string; index: number }
>(({ text, index, style, ...props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSlider()
  const chars = splitChars(text)
  const isActive = activeSlide === index

  return (
    <span
      ref={ref}
      onMouseEnter={() => changeSlide(index)}
      style={{ position: "relative", display: "inline-block", overflow: "hidden", cursor: "pointer", ...style }}
      {...props}
    >
      {chars.map((char, i) => (
        <span key={`${char}-${i}`} style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
          <MotionConfig
            transition={{ delay: i * 0.022, duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* base char — dim, slides out upward when active */}
            <motion.span
              style={{ display: "inline-block", opacity: 0.22 }}
              initial={{ y: "0%" }}
              animate={isActive ? { y: "-115%" } : { y: "0%" }}
            >
              {char === " " ? " " : char}
            </motion.span>
            {/* clone — full opacity, slides in from below when active */}
            <motion.span
              style={{ position: "absolute", left: 0, top: 0, display: "inline-block", opacity: 1 }}
              initial={{ y: "115%" }}
              animate={isActive ? { y: "0%" } : { y: "115%" }}
            >
              {char === " " ? " " : char}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  )
})
TextStaggerHover.displayName = "TextStaggerHover"

/* ─── Image (clip-path reveal) ─────────────────────── */
const clipVariants = {
  visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  hidden:  { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
}

export const HoverSliderImage = React.forwardRef<
  HTMLImageElement,
  HTMLMotionProps<"img"> & { index: number }
>(({ index, ...props }, ref) => {
  const { activeSlide } = useHoverSlider()
  return (
    <motion.img
      ref={ref}
      variants={clipVariants}
      animate={activeSlide === index ? "visible" : "hidden"}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.75 }}
      {...props}
    />
  )
})
HoverSliderImage.displayName = "HoverSliderImage"
