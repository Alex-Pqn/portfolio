import { useEffect } from 'react'

interface Props {
  onBackPressed?: () => void
}

function usePopstateEvent({ onBackPressed }: Props) {
  function onPopstateEvent(e: PopStateEvent) {
    switch (e.state) {
      case 'backPressed':
        if (onBackPressed) onBackPressed()
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('popstate', onPopstateEvent)

    return () => {
      window.removeEventListener('popstate', onPopstateEvent)
    }
  })
}

export default usePopstateEvent
