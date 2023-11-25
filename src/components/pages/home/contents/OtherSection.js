import styles from "./OtherSection.module.css";
import Card from "@/components/common/UI/card/Card";


function OtherSection({ language }){
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <Card title="Recruit" description="We are looking for people who can work with us to create a new world." />
      </div>
    </div>
  );
}


export default OtherSection;