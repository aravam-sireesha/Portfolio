import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}</AnimatePresence>
      {loaded && (
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      )}
    </MotionConfig>
  )
}
