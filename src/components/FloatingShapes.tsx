import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Shape {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  type: 'circle' | 'square' | 'triangle'
}

const colors = ['#4F46E5', '#06B6D4', '#F59E0B', '#8B5CF6', '#EC4899']

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const generated: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      type: (['circle', 'square', 'triangle'] as const)[Math.floor(Math.random() * 3)],
    }))
    setShapes(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-[0.03] dark:opacity-[0.04]"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 20, -20, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="w-full h-full rounded-full"
              style={{ background: shape.color }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="w-full h-full rounded-lg"
              style={{ background: shape.color, transform: 'rotate(45deg)' }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="w-full h-full"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: shape.color,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
