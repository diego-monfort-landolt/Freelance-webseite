import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'
import styles from './ContactForm.module.scss'

const  ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validate = () => {
    let isValid = true
    const newErrors = { name: '', email: '', message: '' }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich'
      isValid = false
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-Mail ist ungültig'
      isValid = false
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich'
      isValid = false
    }
    
    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      // In der Praxis: Hier würde die API-Anbindung erfolgen
      console.log('Formular gesendet:', formData)
      setSubmitted(true)
      
      // Zurücksetzen nach 5 Sekunden
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 5000)
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.container}
      >
        <div className={styles.header}>
          <h2>Kontaktieren Sie mich</h2>
          <p>Ich erstelle Ihnen gerne ein individuelles Angebot</p>
        </div>
        
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={styles.success}
          >
            <h3>Vielen Dank für Ihre Nachricht!</h3>
            <p>Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <div className={styles.icon}>
                <FiUser />
              </div>
              <input
                type="text"
                placeholder="Ihr Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={errors.name ? styles.error : ''}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>
            
            <div className={styles.inputGroup}>
              <div className={styles.icon}>
                <FiMail />
              </div>
              <input
                type="email"
                placeholder="Ihre E-Mail"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={errors.email ? styles.error : ''}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
            
            <div className={styles.inputGroup}>
              <div className={styles.icon}>
                <FiMessageSquare />
              </div>
              <textarea
                placeholder="Ihre Nachricht"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={errors.message ? styles.error : ''}
              ></textarea>
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitButton}
            >
              Nachricht senden
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
export default ContactForm