import React, { memo } from "react";
import Dotdotdot from "react-dotdotdot";
import { useDispatch } from "react-redux";
import iconClose from "../../../../assets/icons/iconClose.png";
import { actions } from "../../../../redux/reducers/tasksReducer";
import { CREATE } from "../constants";
import { TypeInfo, TypeStatuses, TypeUsers } from "../types";
import Changer from "./Changer";
import Creator from "./Creator";
import styles from "./Task.module.scss";

type Props = {
  statuses: TypeStatuses[];
  users: TypeUsers[];
  info: TypeInfo;
  modalMode: string;
};

const Task: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function closeCreateMenu() {
    dispatch(actions.setActiveId(0));
    dispatch(actions.setModalMode(""));
  }

  return (
    <div className={styles["task"]}>
      <div className={styles["header"]}>
        {props.modalMode === CREATE ? (
          <div className={styles["header__title"]}>Новая заявка</div>
        ) : (
          <div className={styles["header__title"]}>
            <div className={styles["header__id"]}>{props.info.id}</div>
            <Dotdotdot clamp={2} className={styles["header__name"]}>
              {props.info.name}
            </Dotdotdot>
          </div>
        )}
        <div className={styles["header__close"]}>
          <img onClick={closeCreateMenu} src={iconClose} alt="close" />
        </div>
      </div>
      <div className={styles["form"]}>
        {props.modalMode === CREATE ? (
          <Creator />
        ) : (
          <Changer
            statuses={props.statuses}
            users={props.users}
            info={props.info}
          />
        )}
      </div>
    </div>
  );
};

export default memo(Task);
