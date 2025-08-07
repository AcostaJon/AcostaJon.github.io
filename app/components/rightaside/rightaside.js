'use client'
// bootstrap components
import Placeholder from 'react-bootstrap/Placeholder';
// react components
import Link from 'next/link';
// image components
import EmailIcon from '@/app/imgs/email';
// css
import styles from './rightaside.module.css'

export default function RightAside(params) {
    return (
        <aside className={styles.rightAside}>
            <ul>
                {/* email icon */}
                <li>
                    <Link href={"mailto:jonacosta86@gmail.com"} target="_blank" title='Email Me'>
                        <EmailIcon />
                    </Link>
                </li>
                {/* gray placeholder */}
                <li>
                    <Placeholder bg="secondary" xs={6} />
                </li>
            </ul>
        </aside>
    )
}