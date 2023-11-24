import styles from './RecruitList.module.css';
import ToggleTriangle from "@/components/common/UI/toggle-triangle/ToggleTriangle";


function RecruitList({ title, isOpen, toggle }) {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.title}>
          <h3>{title}</h3>
        </div>

        <div className={styles.triangleWrapper}>
          <ToggleTriangle isOpen={isOpen} toggle={toggle} />
        </div>

      </div>
    </>
  );
}


export default RecruitList;