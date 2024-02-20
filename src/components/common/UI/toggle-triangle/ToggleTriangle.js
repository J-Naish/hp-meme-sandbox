import Image from "next/image";
import styles from "./ToggleTriangle.module.css";
import triangleSymbol from "@/public/images/triangle.webp";


// triangle symbol to open and close the dropdown
export default function ToggleTriangle({ isOpen, toggle }) {

  const imgClass = `${styles.symbol} ${isOpen ? styles.rotateRight : ''}`;
  const textClass = `${styles.textDefault} ${isOpen ? '' : styles.hidden}`;

  return (
    <>
      <div className={styles.container}>

        <div className={textClass}>close</div>

        <Image
          src={triangleSymbol}
          onClick={toggle}
          className={imgClass}
          alt="triangle symbol to open and close the dropdown"
          width={10}
          height={10}
        />

      </div>
    </>
  )
}