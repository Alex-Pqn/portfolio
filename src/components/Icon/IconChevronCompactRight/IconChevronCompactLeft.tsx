import './IconChevronCompactLeft.scss'

interface Props {
  color?: string
  size?: string
}

function IconChevronCompactLeft({ color, size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '16px'}
      height={size ? size : '16px'}
      fill={color ? color : 'currentColor'}
      className="bi bi-chevron-compact-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
      />
    </svg>
  )
}

export default IconChevronCompactLeft
