
import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Terminal,
  ShieldCheck,
  Sparkles,
  Layers3,
} from 'lucide-react'
import './ProfileSummary.css'

const skills = [
  'Java',
  'Spring Boot',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Generative AI',
]

const focusAreas = [
  'Java Full-Stack Development',
  'AI-Powered Applications',
  'Building Real-World Projects',
  'Learning New Technologies',
]

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    detail: 'Building interfaces, backend services and REST APIs.',
  },
  {
    icon: BrainCircuit,
    title: 'Generative AI',
    detail: 'Exploring AI integrations and intelligent applications.',
  },
  {
    icon: ShieldCheck,
    title: 'Software Quality',
    detail: 'Testing APIs, debugging and validating applications.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function TechShape({ position, color, geometry, scale = 0.5, speed = 1 }) {
  const mesh = useRef(null)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.28 * speed
    mesh.current.rotation.y += delta * 0.4 * speed
    mesh.current.rotation.z += delta * 0.12 * speed
  })

  return (
    <Float
      speed={1.5 * speed}
      rotationIntensity={0.55}
      floatIntensity={1.1}
    >
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[0.72, 0.2, 12, 32]} />}
        {geometry === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}

        <meshStandardMaterial
          color={color}
          metalness={0.72}
          roughness={0.23}
          emissive={color}
          emissiveIntensity={0.22}
          wireframe={geometry === 'icosahedron'}
        />
      </mesh>
    </Float>
  )
}

function TechScene() {
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#dce8ff" />
      <pointLight position={[-4, 1, 3]} intensity={22} color="#7c5cff" />
      <pointLight position={[4, -2, 2]} intensity={18} color="#35d9ff" />

      <TechShape position={[-1.25, 1.65, 0]} color="#8b7bff"
        geometry="octahedron" scale={0.42} speed={0.9} />
      <TechShape position={[1.3, 1.15, -0.3]} color="#38d9ff"
        geometry="box" scale={0.34} speed={1.2} />
      <TechShape position={[1.55, -0.5, 0.3]} color="#9b8aff"
        geometry="icosahedron" scale={0.42} speed={0.8} />
      <TechShape position={[-1.45, -1.2, -0.2]} color="#45e0ca"
        geometry="torus" scale={0.42} speed={1.3} />
      <TechShape position={[0.95, -1.8, -0.4]} color="#5b91ff"
        geometry="dodecahedron" scale={0.32} speed={0.75} />
    </>
  )
}

function FloatingTech() {
  return (
    <div className="ps-3d-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 43 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <TechScene />
        </Suspense>
      </Canvas>
    </div>
  )
}

function SkillChip({ children, index }) {
  return (
    <motion.span
      className="ps-skill-chip"
      variants={reveal}
      whileHover={{
        y: -6,
        scale: 1.06,
        borderColor: 'rgba(89, 216, 255, 0.9)',
        boxShadow: '0 8px 24px rgba(56, 217, 255, 0.13)',
      }}
      transition={{ duration: 0.25 }}
      style={{ transformPerspective: 500 }}
    >
      <span className="ps-chip-dot" />
      {children}
    </motion.span>
  )
}

export default function ProfileSummary() {
  const sectionRef = useRef(null)
  const [focusIndex, setFocusIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  })

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const springX = useSpring(pointerX, {
    stiffness: 120,
    damping: 18,
    mass: 0.5,
  })

  const springY = useSpring(pointerY, {
    stiffness: 120,
    damping: 18,
    mass: 0.5,
  })

  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])

  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIndex((current) => (current + 1) % focusAreas.length)
    }, 2800)

    return () => clearInterval(timer)
  }, [])

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section className="profile-section" id="about" ref={sectionRef}>
      <motion.div
        className="ps-scroll-progress"
        style={{ scaleX: progressScale }}
      />

      <div className="ps-background-orb ps-orb-one" />
      <div className="ps-background-orb ps-orb-two" />

      <div className="profile-shell">
        <motion.div
          className="profile-topline"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="profile-section-index">
            <span className="ps-index-line" />
            01 / PROFILE SUMMARY
          </span>

          <span className="profile-availability">
            <span className="availability-dot" />
            OPEN TO OPPORTUNITIES
          </span>
        </motion.div>

        <div className="profile-layout">
          <div className="profile-copy">
            <motion.div
              className="profile-eyebrow"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles size={15} />
              <span>JAVA + MERN + GENERATIVE AI</span>
            </motion.div>

            <motion.h2
              className="profile-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.22 },
                },
              }}
            >
              <motion.span className="ps-reveal-line" variants={reveal}>
                Learning, Building,
              </motion.span>
              <br />
              <motion.span className="ps-reveal-line" variants={reveal}>
                and Growing Through
              </motion.span>
              <br />
              <motion.span
                className="heading-outline ps-reveal-line"
                variants={reveal}
              >
                Code.
              </motion.span>
            </motion.h2>

            <motion.div
              className="ps-focus-ticker"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <span className="ps-focus-prefix">CURRENTLY EXPLORING</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={focusAreas[focusIndex]}
                  className="ps-focus-value"
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                  transition={{ duration: 0.35 }}
                >
                  {focusAreas[focusIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="profile-intro"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.15 }}
            >
              Hey, I'm <strong>Ashlesa Behera.</strong>
              <br />
              <span className="ps-intro-role">
                Computer Science Graduate · Aspiring Full-Stack Developer
              </span>
            </motion.p>

            <motion.p
              className="profile-description"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.25 }}
            >
              I'm passionate about building full-stack applications, exploring
              Generative AI, and turning what I learn into practical projects.
              I enjoy solving problems, learning new technologies, and
              improving my skills by building real-world applications.
            </motion.p>

            <motion.div
              className="profile-actions"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                className="profile-btn profile-btn-primary"
                href="#projects"
                whileHover={{
                  y: -4,
                  boxShadow: '0 10px 30px rgba(88, 135, 255, 0.32)',
                }}
                whileTap={{ scale: 0.96 }}
              >
                Explore my work <ArrowUpRight size={17} />
              </motion.a>

              <motion.a
                className="profile-btn profile-btn-secondary"
                href="#contact"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                Let's connect <ArrowDownRight size={17} />
              </motion.a>
            </motion.div>

            <motion.div
              className="profile-divider"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            >
              <span />
            </motion.div>

            <motion.div
              className="profile-skills-heading"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <span>MY TECHNOLOGY TOOLKIT</span>
              <Terminal size={16} />
            </motion.div>

            <motion.div
              className="profile-skill-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.09 },
                },
              }}
            >
              {skills.map((skill, index) => (
                <SkillChip key={skill} index={index}>
                  {skill}
                </SkillChip>
              ))}
            </motion.div>

            <motion.div
              className="ps-micro-note"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="ps-live-dot" />
              ALWAYS LEARNING. ALWAYS BUILDING.
            </motion.div>
          </div>

          <motion.div
            className="profile-visual"
            onMouseMove={handlePointerMove}
            onMouseLeave={resetPointer}
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="ps-visual-grid" aria-hidden="true" />
            <FloatingTech />

            <motion.div
              className="ps-photo-card"
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.3 }}
            >
              <div className="ps-card-top">
                <span className="ps-card-status">
                  <span className="availability-dot" />
                  DEVELOPER PROFILE
                </span>
                <span className="ps-card-year">2026</span>
              </div>

              <div className="ps-photo-container">
                <img
                  className="profile-photo"
                  src="/pic1.jpg"
                  alt="Ashlesa Behera"
                />

                <div className="ps-photo-shade" />

                <div className="ps-photo-overlay">
                  <span className="ps-photo-label">THE DEVELOPER</span>
                  <strong>Ashlesa Behera</strong>
                  <span className="ps-photo-subtitle">
                    Turning curiosity into code.
                  </span>
                </div>
              </div>

              <div className="ps-card-footer">
                <div className="ps-card-focus">
                  <span>CORE FOCUS</span>
                  <strong>Full-Stack Development</strong>
                </div>
                <Code2 size={23} />
              </div>
            </motion.div>

            <motion.div
              className="ps-floating-badge ps-badge-java"
              animate={{ y: [0, -9, 0], rotate: [-2, 2, -2] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.12 }}
            >
              <span className="ps-badge-symbol">J</span>
              <span>JAVA</span>
            </motion.div>

            <motion.div
              className="ps-floating-badge ps-badge-react"
              animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.12 }}
            >
              <span className="ps-react-symbol">✳</span>
              <span>REACT</span>
            </motion.div>

            <motion.div
              className="ps-floating-badge ps-badge-ai"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.12 }}
            >
              <BrainCircuit size={17} />
              <span>GEN AI</span>
            </motion.div>

            <div className="ps-orbit ps-orbit-one" aria-hidden="true" />
            <div className="ps-orbit ps-orbit-two" aria-hidden="true" />
          </motion.div>
        </div>

        <motion.div
          className="profile-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16 } },
          }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                className="profile-highlight"
                key={item.title}
                variants={reveal}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="highlight-number">0{index + 1}</span>

                <div className="highlight-icon">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div className="highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>

                <ArrowUpRight className="highlight-arrow" size={18} />
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="profile-bottom-line"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span>
            <Layers3 size={15} />
            JAVA · REACT · APIs · AI
          </span>
          <span>DESIGNED TO BUILD. BUILT TO GROW.</span>
        </motion.div>
      </div>
    </section>
  )
}