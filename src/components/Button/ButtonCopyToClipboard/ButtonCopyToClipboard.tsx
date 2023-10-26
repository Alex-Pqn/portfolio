import styles from './ButtonCopyToClipboard.module.scss'
import IconClipboardCheck from '@/components/Icon/IconClipboardCheck/IconClipboardCheck'
import IconCheck from '@/components/Icon/IconCheck/IconCheck'
import { useState } from 'react'

interface Props {
  textToCopy: string
  size?: string
}

const ButtonCopyToClipboard = ({
  textToCopy,
  size,
}: Props): React.JSX.Element => {
  const [isCopied, setIsCopied] = useState(false)
  const isDesktopDisplay = document.documentElement.clientWidth >= 1200

  // Hide component on mobile devices
  // Event not supported
  if (!isDesktopDisplay) return null!

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1000)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isCopied ? (
          /* copied-icon */
          <div className={styles['content__copied-icon']}>
            <IconCheck color="rgb(0, 255, 0)" size={size} />
          </div>
        ) : (
          /* copy-button */
          <div className={styles['content__copy-button']}>
            <button onClick={copyToClipboard}>
              <IconClipboardCheck size={size} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ButtonCopyToClipboard
