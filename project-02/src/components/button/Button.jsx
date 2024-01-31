import styles from "./Button.module.css"
//import {useState} from 'react';

const Button = (props) => {
  const icons = props.icons;


   
  return (
      // <button className={`${ props.isOutline? styles.outline_btn  : styles.primary_btn}`}>
      //    {props.icon}
      //    {props.text}
      // </button>
    <button className={props.inOutline ? styles.isOutline_btn: styles.primary_btn}>
         {icon}
         {text}
    </button>

  )
}

export default Button