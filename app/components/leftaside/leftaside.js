'use client'
// react component
import Link from 'next/link';
// css
import styles from './leftaside.module.css'
// bootstrap component
import Placeholder from 'react-bootstrap/Placeholder';
// image components
import LinkedInIcon from '@/app/imgs/linkedinicon'
import GithubIcon from '@/app/imgs/githubicon'


export default function LeftAside(params) {
    return (
        <section className={styles.leftAside} >
            <ul>
                {/* github icon */}
                <li>
                    <Link href={"https://github.com/AcostaJon"} target="_blank" title='My Github'>
                        <GithubIcon />
                    </Link>
                </li>
                {/* linkedin icon */}
                <li>
                    <Link href={"https://www.linkedin.com/in/acostajon/"} target="_blank"  title='My LinkedIn'>
                        <LinkedInIcon />
                    </Link>
                </li>
                {/* placeholder */}
                <li >
                    <Placeholder bg="secondary"  />
                </li>
            </ul>
        </section>
    )
}