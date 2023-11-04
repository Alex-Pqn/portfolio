import styles from './ErrorFallback.module.scss'

interface Props {
  error: {
    name: string
    message: string
    stack?: string
  }
  resetErrorBoundary: (...args: unknown[]) => void
}

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: Props): React.JSX.Element => {
  return (
    <section className={styles['error-fallback']}>
      <h1>Une erreur est survenue.</h1>
      {error.stack ? (
        <pre>{error.stack}</pre>
      ) : (
        <pre>
          {error.name}: {error.message}
        </pre>
      )}
      <button className="button" onClick={resetErrorBoundary}>
        Réessayer
      </button>
    </section>
  )
}

export default ErrorFallback
