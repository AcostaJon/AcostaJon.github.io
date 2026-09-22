'use client'
// react
import { useState } from 'react'
// my components
import Header from './components/header/header'
import LeftAside from './components/leftaside/leftaside'
import RightAside from './components/rightaside/rightaside'
import Main from './components/main/main'
// css
import styles from './page.module.css'


export default function Home() {
  // keys:id's for projects
  let aKeyValue = 0;
  let dKeyValue = 0;
  let sKeyValue = 0;

  // api projects
  const [apiProjects, setApiProjectrs] = useState(
    [
      {
        key: `a${aKeyValue++}`,
        id: `reelBuzzProject`,
        title: "ReelBuzz | Media Streaming",
        description: "ReelBuzz is a sleek, responsive web application built to serve as a central hub for official movie and TV show trailers.",
        languages: ["Reactjs", "Nextjs", "Css", "ReactPlayer", "MongoDB"],
        githubLink: "https://github.com/AcostaJon/ReelBuzz",
        projectLink: "https://reel-buzz.vercel.app/",
        apiLink: "https://developer.themoviedb.org/docs/getting-started",

      },
      {
        key: `a${aKeyValue++}`,
        id: `twoMuchTwoSayProject`,
        title: "2much2say | Podcast",
        description: "A fast, modern web application designed for seamless audio streaming, episode discovery, and creator management. Built for crisp audio playback, intuitive user navigation, and effortless content distribution.",
        languages: ["Reactjs", "Nextjs", "Bootstrap"],
        githubLink: "https://github.com/AcostaJon/2much2say",
        projectLink: "https://2much2say.vercel.app/",
        apiLink: "https://developer.spotify.com/documentation/web-api",

      },
      {
        key: `d${dKeyValue++}`,
        id: `userDashboardProject`,
        title: "User Dashboard",
        description: "Turn raw numbers into clarity. This is a smart, intuitive dashboard app that gives users a crystal-clear view of their data through sleek, interactive graphs and charts. Designed to be as functional as it is elegant.",
        languages: ['Javascript', 'Html', "Css", "Chart.js"],
        githubLink: "https://github.com/AcostaJon/user-dashboard",
        projectLink: "https://acostajon.github.io/user-dashboard/"
      },
      {
        key: `a${aKeyValue++}`,
        id: `windBreakerProject`,
        title: "WindBreaker | Weather",
        description: "Stay ahead of the elements with WindBreaker, the ultimate weather app designed to provide precise, real-time forecasts tailored to your exact location",
        languages: ["Reactjs", "Express.js", "Css"],
        githubLink: "https://github.com/AcostaJon/Windbreaker",
        projectLink: "https://windbreaker-seven.vercel.app/",
        apiLink: "https://www.weatherapi.com/",
      },
      {
        key: `a${aKeyValue++}`,
        id: `foreclosureClinicProject`,
        title: "Foreclosure Clinic | Consulting",
        description: "A dedicated team of experts supporting homeowners facing the challenges of foreclosure.",
        languages: ['Wordpress'],
        projectLink: "https://foreclosureclinic.com/",
      }
    ]
  );
  


  return (
    <div className={styles.home}>
      {/* animated lines */}
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <Header />
      <LeftAside />
      <Main apiAccordion={apiProjects} />
      <RightAside />
    </div>
  )
}
