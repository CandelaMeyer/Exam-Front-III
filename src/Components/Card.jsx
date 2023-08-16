import styles from './Card.module.css'

function Card({values}) {
  return (
    <div className={styles.containerResultado}>
      <p>Usuario acreditado</p>
      <ul>
        <li>{values.deporte}</li>
        <li>{values.dni}</li>
      </ul>
    </div>
  )
}
export default Card
