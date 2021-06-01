import { memo } from "react";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";
import { cardsHeader } from "./constants";

const Cards: React.FC = () => {
  return (
    <div className={styles["cards"]}>
      <div className={styles["cards__headers"]}>
        {cardsHeader.map((header) => (
          <div key={header.id} className={styles["cards__header"]}>
            {header.name}
          </div>
        ))}
      </div>
      <div className={styles["cards__border"]} />
      <div className={styles["cards__content"]}>
        <Card />
      </div>
    </div>
  );
};

export default memo(Cards);
