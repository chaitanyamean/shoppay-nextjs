import Link from "next/link";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" className={styles.logo}>
          {/* <a className={styles.logo}> */}
          <img src="../../../logo.png" alt="" />
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
}
