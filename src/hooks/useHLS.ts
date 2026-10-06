import { useEffect, useState, type RefObject } from 'react'
import Hls from 'hls.js'

export function useHLS(ref: RefObject<HTMLVideoElement>, src: string) {
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    let hls: Hls | undefined
    try {
      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true })
        hls.loadSource(src)
        hls.attachMedia(video)
        hls.on(Hls.Events.ERROR, (_e, data) => {
          if (data.fatal) { setFailed(true); hls?.destroy() }
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
        video.addEventListener('error', () => setFailed(true), { once: true })
      } else setFailed(true)
    } catch { setFailed(true) }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause()
    else video.play().catch(() => {})
    return () => hls?.destroy()
  }, [ref, src])
  return { failed }
}
