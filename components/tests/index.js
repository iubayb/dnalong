"use client"
import Card from "./Card"
import styles from "@/styles/tests/Tests.module.scss"

const tests = [
    {
        title: "Advanced methylation gene pack",
        lab: "Veritas",
        description: "More about the information written here.",
        type: "Prevention"
    },
    {
        title: "Advanced methylation gene pack1",
        lab: "Veritas",
        description: "More about the information written here.",
        type: "Diagnostic"
    },
    {
        title: "Advanced methylation gene pack2",
        lab: "Veritas",
        description: "More about the information written here.",
        type: "Prevention"
    },
    {
        title: "Advanced methylation gene pack3",
        lab: "Veritas",
        description: "More about the information written here.",
        type: "Diagnostic"
    },
    {
        title: "Advanced methylation gene pack4",
        lab: "Veritas",
        description: "More about the information written here.",
        type: "Prevention"
    },

]


export default function Tests() {
    return (
        <div className={styles.container}>

            <div className={styles.utils}>
                <div className={styles.selectors}>
                    <button>Prevention</button>
                    <button>Diagnostic</button>
                </div>
                <input placeholder="Search" />
            </div>

            <div className={styles.cards}>
                {
                    tests.map((test) => (
                        <Card key={test.title} test={test} />
                    ))
                }
            </div>

        </div>

    )
}