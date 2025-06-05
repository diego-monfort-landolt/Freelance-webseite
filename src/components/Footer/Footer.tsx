import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>DigitalSolutions</h3>
            <p>Professionelle Webentwicklung & Social Media Management</p>
          </div>
          
          <div className={styles.social}>
            <a href="https://github.com" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
             </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} DigitalSolutions. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}

export default Footer