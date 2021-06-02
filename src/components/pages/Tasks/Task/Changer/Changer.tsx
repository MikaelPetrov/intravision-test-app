import { memo } from "react";
import { TypeInfo } from "../../types";
import styles from "./Changer.module.scss";

type Props = {
  info: TypeInfo;
};

const Changer: React.FC<Props> = (props) => {
  return (
    <div className={styles["changer"]}>
      <div className={styles["changer__description"]}>
        {props.info.description}
      </div>
      <div className={styles["changer__sider"]}>zz</div>
    </div>
  );
};

export default memo(Changer);
