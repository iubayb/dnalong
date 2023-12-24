'use client';
import styles from "@/styles/global/header/drawer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Drawer({ links }) {

    const [openDrawer, setOpenDrawer] = useState(false)

    const DrawerContent = ({ href, label, sublinks }) => {

        const [open, setOpen] = useState(false)

        return (

            <div className={styles.navItem}>
                <Link href={href || "#"}
                    className={!!sublinks ? open ? styles.open : styles.hasSublinks : undefined}
                    onClick={(e) => {

                        if (!!sublinks) {
                            e.preventDefault(),
                                links = links.map((link) => {
                                    if (link.label === label) {
                                        setOpen(!open)
                                    }
                                    return link
                                })
                        }
                        else{
                            setOpenDrawer(false)
                        }
                    }}

                >{label}</Link>
                {sublinks && (
                    <div className={`${open ? ' ' : styles.hide} ${styles.sublinks}`}>
                        {sublinks.map(({ group, links }, i) => (
                            <Fragment key={i}>
                                <h3>{group}</h3>
                                {links.map(({ href, label }) => (
                                    <Link key={href} href={href} onClick={()=> setOpenDrawer(false)}>{label}</Link>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                )}
            </div>
        )
    }


    return (
        <>
            <Image onClick={() => setOpenDrawer(true)} className={styles.mobileMenuBTN} src="/menu.svg" alt="menu" width={40} height={40} />
            <div className={`${styles.drawer} ${openDrawer && styles.open}`}>
                <Image onClick={() => setOpenDrawer(false)} className={styles.closeBTN} src="/close.svg" alt="close" width={40} height={40} />
                <div className={styles.drawerContent}>
                    {links.map(({ href, label, sublinks }) => (
                        <DrawerContent key={label} href={href} label={label} sublinks={sublinks} />
                    ))}
                </div>
                <Image src="/logo.svg" alt="DNA LONGEVITY" width={157} height={55} />
            </div>
        </>
    )
}