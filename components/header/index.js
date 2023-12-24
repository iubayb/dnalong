import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/global/header/index.module.scss";
import { Fragment } from "react";
import Drawer from "./Drawer";

const links = [
    {
        href: "/",
        label: "home"
    },
    {
        label: "solutions",
        sublinks: [
            {
                group: "genetic counseling",
                links: [
                    {
                        label: "Book an Appointment",
                        href: "/book-appointment",
                    }
                ]
            },
            {
                group: "genetic testing",
                links: [
                    {
                        label: "Book a Test",
                        href: "/book-test",
                    },
                    {
                        label: "Prevention",
                        href: "/prevention",
                    },
                    {
                        label: "Diagnostic",
                        href: "/diagnostic",
                    }
                ]
            }
        ]
    },
    {
        href: "/blog",
        label: "blog",
    },
    {
        href: "/about",
        label: "about",
    },
]

export default function Header() {

    return (
        <header className={styles.header}>
            <Image className={styles.logo} src="/logo.svg" alt="DNA LONGEVITY" width={230} height={80} />
            <nav>
                {links.map(({ href, label, sublinks }, i) => (
                    <div className={styles.navItem} key={i}>
                        <Link className={styles.navLink} href={href || "#"} >
                            {label}
                        </Link>
                        {sublinks && (
                            <div className={`${styles.sublinks} ${(i === (links.length - 1) && !!sublinks) ? styles.lastNavItem : undefined}`}>
                                {sublinks.map(({ group, links }) => (
                                    <Fragment key={group}>
                                        <h3>{group}</h3>
                                        {links.map(({ href, label }, i) => (
                                            <Link key={i} href={href} className={(i === (links.length - 1)) ? styles.lastLink : undefined}>
                                                {label}
                                            </Link>
                                        ))}
                                    </Fragment>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
            <Drawer links={links} />
        </header>
    )
}