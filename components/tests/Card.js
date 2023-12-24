import styles from "@/styles/tests/Card.module.scss"

export default function Card({test}) {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{test.title}</p>
            <a className={styles.readmore}>read more</a>
            <div className={styles.hidden}>
                <div>
                    <p className={styles.lab}>by {test.lab}</p>
                    <p className={styles.desc}>{test.description}</p>
                </div>
                <a className={styles.book}>book now</a>
            </div>
        </div>
    )
}