import styles from "@/styles/home/WhatWeDo.module.scss"

const whatwedo = {
    heading: "What we do",
    tagline: "HEALTH AND WELLNESS",
    body: "Knowing what is stored in your genes allows you to make informed health decisions and to prevent diseases. Throughout the discovery journey, a genetic counselor will be your guide and counsel you on which actions to take with regards to your current and future health."
}


export default function WhatWeDo() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{whatwedo.heading}</h2>
            <p className={styles.tagline}>{whatwedo.tagline}</p>
            <p className={styles.body}>{whatwedo.body}</p>
        </div>
    )
}