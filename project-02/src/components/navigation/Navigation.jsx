
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (

 <nav className={`container ${styles.navigation}`}> 
       <div className="logo">
            <img src="/images/Frame.png" alt="logo" />
       </div>
          <ul>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
          </ul>
  </nav>
  )
};
export default Navigation

