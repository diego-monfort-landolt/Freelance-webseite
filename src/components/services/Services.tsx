import { motion } from 'framer-motion'
import { FiCode, FiEdit, FiInstagram } from 'react-icons/fi'
import styles from './Services.module.scss'

const services = [
  {
    title: "Webentwicklung",
    description: "Maßgeschneiderte Websites mit modernsten Technologien",
    features: ["React/Next.js", "Mobile First", "SEO optimiert", "CH-Hosting"],
    icon: <FiCode />,
    color: "#7c4dff"
  },
  {
    title: "Website Management",
    description: "Vollumfängliche Betreuung Ihrer Online-Präsenz",
    features: ["Content Updates", "Sicherheitsupdates", "Performance-Optimierung", "Backup-Service"],
    icon: <FiEdit />,
    color: "#00bcd4"
  },
  {
    title: "Social Media Management",
    description: "Strategische Präsenz auf allen relevanten Plattformen",
    features: ["Content Creation", "Community Management", "Analyse & Reporting", "Kampagnenmanagement"],
    icon: <FiInstagram />,
    color: "#e91e63"
  }
]

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Meine Dienstleistungen
      </motion.h2>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.5)`
            }}
          >
            <div 
              className={styles.icon}
              style={{ backgroundColor: service.color }}
            >
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
export default Services