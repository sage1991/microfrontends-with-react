import { bootstrap } from "@mfp/marketing"
import { useLayoutEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router"

import { router } from "../router"

export const MarketingApp = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()
  const location = useLocation()
  const containerLocationRef = useRef(location)
  containerLocationRef.current = location

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return
    }

    const channel = new MessageChannel()
    channel.port1.start()
    channel.port2.start()

    router.subscribe(({ historyAction, location, errors }) => {
      if (!errors) {
        channel.port1.postMessage(JSON.stringify({ historyAction, location }))
      }
    })

    channel.port1.addEventListener("message", (event) => {
      const { historyAction, location } = JSON.parse(event.data)
      if (
        location.pathname === containerLocationRef.current.pathname &&
        location.hash === containerLocationRef.current.hash &&
        location.search === containerLocationRef.current.search &&
        location.state === containerLocationRef.current.state
      ) {
        return
      }

      if (historyAction === "POP") {
        navigate(-1)
        return
      }

      navigate(
        {
          pathname: location.pathname,
          hash: location.hash,
          search: location.search
        },
        {
          replace: historyAction === "REPLACE",
          state: location.state
        }
      )
    })

    const root = bootstrap({
      container: containerRef.current,
      port: channel.port2,
      routerConfig: {
        type: "memory",
        opts: {
          initialEntries: [containerLocationRef.current.pathname],
          initialIndex: 0
        }
      }
    })

    return () => {
      root.unmount()
      channel.port1.close()
      channel.port2.close()
    }
  }, [])

  return <div ref={containerRef} />
}
