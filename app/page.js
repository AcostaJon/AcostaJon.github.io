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
        description: "Stay effortlessly up to speed with everything new in entertainment. ReelBuzz brings the freshest movie and TV game-changer trailers right to your fingertips—whether you're tracking the latest blockbuster, binge-worthy series, or indie gem",
        languages: ["Reactjs", "Nextjs", "Css", "ReactPlayer", "MongoDB"],
        githubLink: "https://github.com/AcostaJon/ReelBuzz",
        projectLink: "https://reel-buzz.vercel.app/",
        apiLink: "https://developer.themoviedb.org/docs/getting-started",

      },
      {
        key: `a${aKeyValue++}`,
        id: `twoMuchTwoSayProject`,
        title: "2much2say | Podcast",
        description: "Welcome to the official site of 2much2say, a vibrant hub where storytelling, insight, and community converge",
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
        title: "Foreclosurec Clinic | Consulting",
        description: "A dedicated team of experts supporting homeowners facing the challenges of foreclosure.",
        languages: ['Wordpress'],
        projectLink: "https://foreclosureclinic.com/",
      }
    ]
  );
  
  // static projects
  const [staticProjects, setStaticProjects] = useState(
    [
      {
        key: `s${sKeyValue++}`,
        id: `magentoProject`,
        title: "Magento",
        description: "Business landing page for a leader in digital commerce",
        languages: ['Html', 'Css'],
        githubLink: "https://github.com/AcostaJon/Magento",
        projectLink: "/Magento"
      },
      {
        key: `s${sKeyValue++}`,
        id: `blossomKitchenProject`,
        title: "Blossom Kitchen",
        description: "'Eat green, stay healthy is the slogan' check out their landing page",
        languages: ['Html', 'Css'],
        githubLink: "https://github.com/AcostaJon/Blossom-Kitchen",
        projectLink: "/Blossom-Kitchen"
      },
      {
        key: `s${sKeyValue++}`,
        id: `webStyleGuideProject`,
        title: "WebStyle Guide",
        description: "Guidelines that display the conversion of css to sass through partials",
        languages: ['Html', 'Css', 'Sass'],
        githubLink: "https://github.com/AcostaJon/techdegree-project-4",
        projectLink: "/techdegree-project-4"
      },
      {
        key: `s${sKeyValue++}`,
        id: `registrationFormProject`,
        title: "Registration Form",
        description: "Commonly used registration form for acquiring new users",
        languages: ['Html', 'Css'],
        githubLink: "https://github.com/AcostaJon/My-techdegree-project-3",
        projectLink: "/My-techdegree-project-3/"
      },
      {
        key: `s${sKeyValue++}`,
        id: `studentPortfolioProject`,
        title: "Student Portfolio",
        description: "A single page user portfolio",
        languages: ['Html', 'Css'],
        githubLink: "https://github.com/AcostaJon/techdegree-project-2",
        projectLink: "/techdegree-project-2/"
      },
      {
        key: `s${sKeyValue++}`,
        id: `clientResumeProject`,
        title: "Client Resume",
        description: "A single page resume for a client",
        languages: ['Html', 'Css'],
        githubLink: "https://github.com/AcostaJon/techdegree-project-1",
        projectLink: "/techdegree-project-1/"
      }
    ]
  );

  // dynamic projects
  const [dynamicProjects, setDynamicProjects] = useState(
    [
      {
        key: `d${dKeyValue++}`,
        id: `businessConsultProject`,
        title: "James Consulting",
        description: "Heres a business web site for a start-up consulting company ",
        languages: ['Nextjs', 'Reactjs', "Bootstrap", "Css"],
        githubLink: "https://github.com/AcostaJon/Consulting-Firm",
        projectLink: "/Consulting-Firm"
      },
      {
        key: `d${dKeyValue++}`,
        id: `skyLineProject`,
        title: "Skyline Travels",
        description: "Landing page for a travel agency",
        languages: ['Html', 'Css', 'Javascript'],
        githubLink: "https://github.com/AcostaJon/Skyline",
        projectLink: "/Skyline"
      },
      {
        key: `d${dKeyValue++}`,
        id: `userDashboardProject`,
        title: "User Dashboard",
        description: "A back-end user dashboard, includes scalable vector graphics and js graph plugins to display data",
        languages: ['Javascript', 'Html', "Css"],
        githubLink: "https://github.com/AcostaJon/techdegree-project-7",
        projectLink: "/techdegree-project-7"
      },
      {
        key: `d${dKeyValue++}`,
        id: `gameShowProject`,
        title: "Game Show",
        description: "A word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase",
        languages: ['Javascript', 'Html', "Css"],
        githubLink: "https://github.com/AcostaJon/techdegree-project-6",
        projectLink: "/techdegree-project-6"
      },
      {
        key: `d${dKeyValue++}`,
        id: `photoGalleryProject`,
        title: "Photo Gallery",
        description: "A showcase of photos. Search for whats written in the photos captions and out comes that photo",
        languages: ['Javascript', 'Html', "Css"],
        githubLink: "https://github.com/AcostaJon/techdegree-project-5",
        projectLink: "/techdegree-project-5"
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
      <Main apiAccordion={apiProjects} staticAccordion={staticProjects} dynamicAccordion={dynamicProjects} />
      <RightAside />
    </div>
  )
}
