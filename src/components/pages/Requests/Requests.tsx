import { Button } from "antd";
import { memo, useState } from "react";
import Cards from "./Cards";
import Request from "./Request/Request";
import styles from "./Requests.module.scss";

const Requests: React.FC = (props) => {
  const [createMenu, setCreateMenu] = useState(false);

  function openCreateRequestMenu() {
    setCreateMenu(true);
  }

  return (
    <div className={styles["requests"]}>
      <div className={styles["create"]}>
        <Button
          onClick={openCreateRequestMenu}
          type="primary"
          shape="circle"
          className={styles["create__button"]}
        >
          Создать заявку
        </Button>
      </div>
      <Cards />
      {createMenu && <Request setCreateMenu={setCreateMenu} />}
    </div>
  );
};

export default memo(Requests);
