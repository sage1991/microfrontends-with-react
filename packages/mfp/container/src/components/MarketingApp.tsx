import { bootstrap } from "@mfp/marketing"
import { useLayoutEffect, useRef } from "react"

export const MarketingApp = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    bootstrap(containerRef.current)
  }, [])

  return <div ref={containerRef} />
}
