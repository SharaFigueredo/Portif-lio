import styles from '@/styles/menu.module.css'
function Menu() {
  return (
    <nav className={styles.cabecalho}>
      <ul>
        <li className={styles.itenscabecalho}>Home</li>
        <li className={styles.itenscabecalho}>Sobre</li>
        <li className={styles.itenscabecalho}>Projetos</li>
        <li className={styles.itenscabecalho}>Contacto</li>
      </ul>
    </nav>
  )
}
export default Menu