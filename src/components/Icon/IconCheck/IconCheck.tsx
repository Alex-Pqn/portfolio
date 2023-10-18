import './IconCheck.scss'
import PropTypes, { InferProps } from 'prop-types'

const Props = {
  color: PropTypes.string,
  size: PropTypes.string,
}

type PropsTypes = InferProps<typeof Props>

const IconCheck = ({ color, size }: PropsTypes): React.JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '16px'}
      height={size ? size : '16px'}
      fill={color ? color : 'currentColor'}
      className="bi bi-check"
      viewBox="0 0 16 16"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
    </svg>
  )
}

IconCheck.propTypes = Props

export default IconCheck
