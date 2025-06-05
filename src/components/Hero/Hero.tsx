import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import styles from './Hero.module.scss'

const Hero = () => {
  // Funktion zum Scrollen zu Services
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // NEUE Funktion zum Scrollen zum Kontaktformular

  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.highlight}>Digitale Lösungen</span> die wirken
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Webentwicklung & Social Media Management für anspruchsvolle Kunden
        </motion.p>
        
        <div className={styles.buttonGroup}>
        
          
          {/* Button 2: Scrollt zu Services */}
          <motion.button
            className={`${styles.cta} ${styles.secondary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={scrollToServices}
          >
            Unsere Leistungen
          </motion.button>
        </div>
      </div>
      
      <div className={styles.scrollIndicator} onClick={scrollToServices}>
        <span>Mehr erfahren</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero