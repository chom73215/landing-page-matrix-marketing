import { useEffect, useRef } from 'react'

// Animated canvas background: digital particle/node network
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let animId: number
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width = width
    canvas.height = height

    // Nodes
    const NODE_COUNT = window.innerWidth < 768 ? 30 : 60
    type Node = { x: number; y: number; vx: number; vy: number; size: number; opacity: number }
    const nodes: Node[] = []

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }

    // Mouse parallax
    let mouseX = width / 2
    let mouseY = height / 2
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    const MAX_DIST = 150
    const ACCENT = '0, 255, 135'

    let time = 0

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, width, height)

      // Parallax offset
      const px = (mouseX - width / 2) * 0.015
      const py = (mouseY - height / 2) * 0.015

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(nodes[i].x + px, nodes[i].y + py)
            ctx.lineTo(nodes[j].x + px, nodes[j].y + py)
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        const pulse = Math.sin(time * 2 + node.x) * 0.3 + 0.7

        // Glow
        const grad = ctx.createRadialGradient(
          node.x + px, node.y + py, 0,
          node.x + px, node.y + py, node.size * 4
        )
        grad.addColorStop(0, `rgba(${ACCENT}, ${node.opacity * pulse})`)
        grad.addColorStop(1, `rgba(${ACCENT}, 0)`)
        ctx.beginPath()
        ctx.arc(node.x + px, node.y + py, node.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x + px, node.y + py, node.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, ${node.opacity * pulse})`
        ctx.fill()
      })

      // Floating data streams
      for (let i = 0; i < 3; i++) {
        const streamX = (width * (i + 1)) / 4
        const streamY = ((time * 60 + i * 120) % (height + 200)) - 100
        ctx.beginPath()
        ctx.moveTo(streamX + px, streamY + py)
        ctx.lineTo(streamX + px, streamY + py + 60)
        const streamGrad = ctx.createLinearGradient(0, streamY, 0, streamY + 60)
        streamGrad.addColorStop(0, `rgba(${ACCENT}, 0)`)
        streamGrad.addColorStop(0.5, `rgba(${ACCENT}, 0.15)`)
        streamGrad.addColorStop(1, `rgba(${ACCENT}, 0)`)
        ctx.strokeStyle = streamGrad
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      aria-hidden="true"
    />
  )
}
