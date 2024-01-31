import Button from "../button/Button"
import styles from "./Contect.module.css"
import{MdMessage} from "react-icons/md"
import {IoCall} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
// import {useState} from 'react'

const ContactFrom = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.contactimage}`} >
            <img src="./images/free" alt="main-img" />
        </div>
        <div className={`${styles.contact_form}`}>
          <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={MdMessage} />
        <Button text="VIA CALL" icon={<IoCall/ >} />
          </div>

                  <Button text="VIA EMAIL FORM" icon={MdEmail}  />
            
        </div>
        </div>
  )
}

export default ContactFrom;