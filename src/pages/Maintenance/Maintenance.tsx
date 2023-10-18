import styles from './Maintenance.module.scss'

const Maintenance = () => {
  return (
    <section className={styles.maintenance}>
      <div className={styles.maintenance__title}>
        <h1>Ooops...</h1>
        <h2>
          Une <span>maintenance</span> est en cours.
        </h2>
        <p></p>
      </div>
      <div className={styles.maintenance__social}>
        <p>Contactez-moi via mes réseaux plus bas !</p>
        <p>Alexandre.</p>
      </div>
    </section>
  )
}

export default Maintenance
