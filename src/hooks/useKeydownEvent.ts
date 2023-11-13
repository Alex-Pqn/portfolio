import { useEffect } from 'react'

interface Props {
  onEscape?: () => void
  onArrowRight?: () => void
  onArrowLeft?: () => void
}

function useKeydownEvent({ onEscape, onArrowRight, onArrowLeft }: Props) {
  function onKeydownEvent(e: KeyboardEvent) {
    switch (e.key) {
      case 'Escape':
        if (onEscape) onEscape()
        break
      case 'ArrowRight':
        if (onArrowRight) onArrowRight()
        break
      case 'ArrowLeft':
        if (onArrowLeft) onArrowLeft()
        break
      default:
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeydownEvent)

    return () => {
      window.removeEventListener('keydown', onKeydownEvent)
    }
  })
}

export default useKeydownEvent
