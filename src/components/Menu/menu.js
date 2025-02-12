import styles from '@/styles/menu.module.css'
function Menu() {
  return (
    <nav className={styles.cabecalho}>
        <button className={styles.itenscabecalho}>Home</button>
        <button className={styles.itenscabecalho}>Sobre</button>
        <button className={styles.itenscabecalho}>Projetos</button>
        <button className={styles.itenscabecalho}>Contacto</button>
    </nav>
  )
}
export default Menu