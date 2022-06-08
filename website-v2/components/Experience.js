import styles from "../styles/Experience.module.css";
import CardHeader from "./util/CardHeader";

const Experience = () => {

  return (
    <div className={styles.experienceParent}>
      <div className={styles.imageParent}>
            <img
                className={styles.greetImage}
                src='/images/coffee.jpg'
                />
            </div>
      <div className={styles.schoolTextGroup}>
        <CardHeader headerText={"School"} />

        <div>
          <div>
            Graduated From Iowa State in 2020 With a degree in Computer
            Engineering
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
