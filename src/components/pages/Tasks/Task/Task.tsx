import React, { Dispatch, memo } from "react";
import Dotdotdot from "react-dotdotdot";
import iconClose from "../../../../assets/icons/iconClose.png";
import { TypeAction, TypeThunk } from "../../../../redux/reducers/tasksReducer";
import { CREATE } from "../constants";
import { TypeInfo } from "../types";
import Changer from "./Changer";
import Creation from "./Creation";
import styles from "./Task.module.scss";

type Props = {
  info: TypeInfo;
  modalMode: string;
  dispatch: Dispatch<TypeThunk | TypeAction>;
  setModalMode: Dispatch<React.SetStateAction<string>>;
};

const Task: React.FC<Props> = (props) => {
  function closeCreateMenu() {
    props.setModalMode("");
  }

  return (
    <div className={styles["task"]}>
      <div className={styles["task__header"]}>
        {props.modalMode === CREATE ? (
          <div className={styles["task__title"]}>Новая заявка</div>
        ) : (
          <div className={styles["task__title"]}>
            <div className={styles["task__id"]}>{props.info.id}</div>
            <div className={styles["task__name"]}>
              <Dotdotdot clamp={2}>{props.info.name}</Dotdotdot>
            </div>
          </div>
        )}
        <div className={styles["task__close"]}>
          <img onClick={closeCreateMenu} src={iconClose} alt="close" />
        </div>
      </div>
      <div className={styles["task__form"]}>
        {props.modalMode === CREATE ? (
          <Creation
            dispatch={props.dispatch}
            setModalMode={props.setModalMode}
          />
        ) : (
          <Changer info={props.info} />
        )}
      </div>
    </div>
  );
};

export default memo(Task);
