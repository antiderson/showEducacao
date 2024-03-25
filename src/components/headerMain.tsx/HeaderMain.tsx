import styles from './index.module.css'
export default function HeaderMain() {
    return (
        <div className={styles.cont}>
            <div>
                <h1 className={styles.text}>Apps SWA</h1>
                <h4 className={styles.text2}>EM DESTAQUE</h4>
            </div>
            <div className={styles.marcaDiv}>
                <img
                    className={styles.logo}
                    alt="Marca principal"
                    src="https://c.animaapp.com/aWVWcLPC/img/marca-princ-pal--2@2x.png"
                />
            </div>
        </div>
    )
}
