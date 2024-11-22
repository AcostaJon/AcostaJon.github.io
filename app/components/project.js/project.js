// css
import styles from './project.module.css'
import { useRouter } from 'next/navigation';

export default function Project(props) {
  const router = useRouter()
  let keyValue = 0;
  return (
    <>
      {/* project-1 */}
      <div className={`${styles.project}`} id={props.id}  >
        {/* project image */}
        <div className={styles.projectImageContainer} onClick={() => window.open(props.projectLink, '_blank')} >
        </div>
        {/* project info */}
        <div className={styles.projectInfoContainer}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <ul className={styles.languagesContainer}>
            {
              // list of programing languages
              props.languages.map((lang) => {
                return <li key={keyValue++}>{lang}</li>
              })
            }
          </ul>
          <ul className={styles.linksContainer}>
            <li>
              {props.apiLink ? <a href={props.apiLink} target='_blank'>API</a> : ""}
            </li>
            <li>
              <a href={props.githubLink} target='_blank' title='View Code'>View Code</a>
            </li>
            <li>
              <a href={props.projectLink} target='_blank' title='View Project'>LIVE APP</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}