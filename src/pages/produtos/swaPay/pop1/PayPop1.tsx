import styles from './index.module.css'
export default function PayPop1(){
    return(
        <div className={styles.al}>
            <div className={styles.conte}>
                <a href={`/`}><button className={styles.btn}></button></a>
                <a href={`/PayPop1`}><button className={styles.btn2}></button></a>
            </div>
        </div>
    )
}