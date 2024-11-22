'use client'
// react components
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
// bootstrap components
import Button from 'react-bootstrap/Button';
// image components
import LinkedInIcon from '@/app/imgs/linkedinicon'
import GithubIcon from '@/app/imgs/githubicon'
import ProfilePic from '@/app/imgs/profilepic';
// my components
import Project from '../project.js/project';
// css
import styles from './main.module.css'

export default function Main(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const formRef = useRef(null);

    useEffect(() => {
        // invoke function
        handleIntersectionScroll()
    })

    const handleSubmit = async (e) => {
        // do not refresh page
        e.preventDefault();
        // fetch post request
        const response = await fetch('/api/sendGrid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            })
        });

        // Reset the form
        formRef.current.reset();
        formRef.current[0].value = ''
        formRef.current[1].value = ''
        formRef.current[2].value = ''

        alert("Form submitted")
        await response.json()

    }

    // apply animation when scrolling
    function handleIntersectionScroll() {
        const targets = document.querySelectorAll('.animated-text');
        const observer = new IntersectionObserver(handleIntersection);

        function handleIntersection(entries) {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('text-focus-in')
                }
            });
        }

        targets.forEach(target => {
            observer.observe(target);
        })
    }


    return (
        <main className={styles.mainContent}>
            {/* section 1 */}
            <div className={styles.section1}>
                <h2>Hi, my name is</h2>
                <h1>Jonathan Acosta</h1>
                <h3>I'm a Web Developer</h3>
                <Button variant="outline-warning" href='https://reel-buzz.vercel.app/' target='_blank' title='Tv Shows | Movies | Get a preview of the movies and television series you love. '>Latest Application | Reel Buzz </Button>{' '}
            </div>

            {/* section 2 - about me*/}
            <div className={styles.section2} id='About'>
                {/* heading */}
                <div className={styles.sectionHeadingContainer}>
                    <span>01.</span>
                    <h1>About Me</h1>
                    <div className={styles.sectionHeadingContainerRule} ></div>
                </div>
                {/* image container */}
                <div className={styles.ProfilepicContainer}>
                    <ProfilePic />
                </div>
                <div className='animated-text'>
                    <p>Full stack developer with extensive knowledge in JavaScript, React, and all things web development.
                        My passion for web development is fueled by the mix of creativity, logic, technology, and the never-ending pursuit of new knowledge.
                    </p>
                    <p>Here are a few technologies I've been working with:</p>
                    <div className={styles.section2LangContainer}>
                        <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                        </ul>
                        <ul>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>MongoDB</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* section 3 - some thinges i've built */}
            <div className={styles.section3} id='Work'>
                {/* heading */}
                <div className={styles.sectionHeadingContainer}>
                    <span>02.</span>
                    <h1>Some Things I've Built</h1>
                    <div className={styles.sectionHeadingContainerRule} ></div>
                </div>
                <div className={styles.projectContainer}>
                    {
                        props.apiAccordion.map((project) =>
                            <Project key={project.key} id={project.id} title={project.title} description={project.description} languages={project.languages} apiLink={project.apiLink} instagramLink={project.instagramLink} bgImage={project.bgImage} githubLink={project.githubLink} projectLink={project.projectLink} />
                        )
                    }
                </div>
            </div>

            {/* section 4 - whats next */}
            <div className={styles.section4} id='Contact'>
                {/* heading */}
                <div className={styles.sectionHeadingContainer}>
                    <span>03.</span>
                    <h1>Contact</h1>
                    <div className={styles.sectionHeadingContainerRule} ></div>
                </div>
                <div className={styles.formContainer}>
                    <p className='animated-text'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
                    {/* <Button href={"mailto:jonacosta86@gmail.com"} target="_blank" title='Contact me' variant="outline-warning">Say Hello</Button>{' '} */}
                    <form ref={formRef} onSubmit={handleSubmit} className='container' >
                        <div className="mb-3">
                            <input value={name} required onChange={(e) => {
                                setName(e.target.value);
                            }}
                                type="text" name='name' className="form-control" placeholder='Name' />
                        </div>
                        <div className="mb-3">
                            <input value={email} required onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                                name='email' type="email" className="form-control" aria-describedby="emailHelp" placeholder='Email' />
                        </div>
                        <textarea value={message} required onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                            name='message' className="form-control mb-3" placeholder="Message" id="floatingTextarea2"></textarea>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>

            {/* section 5 - social links */}
            <div className={styles.section5}>
                <ul>
                    <li>
                        <Link href={"https://github.com/AcostaJon"} target="_blank" title='View my code'>
                            <GithubIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/acostajon/"} target="_blank" title='Connect with me'>
                            <LinkedInIcon />
                        </Link>
                    </li>
                </ul>
            </div>

        </main>
    )
}