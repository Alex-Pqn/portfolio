import styles from './ButtonCopyToClipboard.module.scss'
import PropTypes, { InferProps } from 'prop-types'
import IconClipboardCheck from '@/components/Icon/IconClipboardCheck/IconClipboardCheck'
import IconCheck from '@/components/Icon/IconCheck/IconCheck'

const Props = {
  textToCopy: PropTypes.string.isRequired,
  size: PropTypes.string,
}

type PropsTypes = InferProps<typeof Props>

const ButtonCopyToClipboard = ({
  textToCopy,
  size,
}: PropsTypes): React.JSX.Element => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      const copyButtonContainer: HTMLElement = document.querySelector(
        `.${styles['content__copy-button']}`
      )!
      const copiedIconContainer: HTMLElement = document.querySelector(
        `.${styles['content__copied-icon']}`
      )!

      copyButtonContainer.classList.add(styles['content__copy-button--hidden'])
      copiedIconContainer.classList.remove(
        styles['content__copied-icon--hidden']
      )

      setTimeout(() => {
        copyButtonContainer.classList.remove(
          styles['content__copy-button--hidden']
        )
        copiedIconContainer.classList.add(
          styles['content__copied-icon--hidden']
        )
      }, 1000)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* copy-button */}
        <div className={styles['content__copy-button']}>
          <button onClick={copyToClipboard}>
            <IconClipboardCheck size={size} />
          </button>
        </div>
        {/* copied-icon */}
        <div
          className={
            styles['content__copied-icon'] +
            ' ' +
            styles['content__copied-icon--hidden']
          }
        >
          <IconCheck color="rgb(0, 255, 0)" size={size} />
        </div>
      </div>
    </div>
  )
}

ButtonCopyToClipboard.propTypes = Props

export default ButtonCopyToClipboard
