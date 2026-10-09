import { motion, useReducedMotion } from 'framer-motion'

// Subtle 3D tilt + lift on hover. Disabled when the user prefers reduced motion.
export default function Tilt({ children, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as]
  return (
    <M
      className={className}
      style={{ transformPerspective: 900 }}
      whileHover={reduce ? undefined : { y: -6, rotateX: 3, rotateY: -3, transition: { type: 'spring', stiffness: 250, damping: 18 } }}
    >
      {children}
    </M>
  )
}
