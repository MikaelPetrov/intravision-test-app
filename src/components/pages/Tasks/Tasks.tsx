import { Button } from "antd";
import { Dispatch, memo, useState } from "react";
import { TypeAction, TypeThunk } from "../../../redux/reducers/tasksReducer";
import Cards from "./Cards";
import { CREATE } from "./constants";
import Task from "./Task";
import styles from "./Tasks.module.scss";
import { TypeInfo, TypeTasks } from "./types";

type Props = {
  tasks: TypeTasks[];
  info: TypeInfo;
  dispatch: Dispatch<TypeThunk | TypeAction>;
};

const Tasks: React.FC<Props> = (props) => {
  const [modalMode, setModalMode] = useState("");

  function openCreateTaskModal() {
    setModalMode(CREATE);
  }

  return (
    <div className={styles["tasks"]}>
      <div className={styles["create"]}>
        <Button
          onClick={openCreateTaskModal}
          type="primary"
          shape="circle"
          className={styles["create__button"]}
        >
          Создать заявку
        </Button>
      </div>
      <Cards
        tasks={props.tasks}
        dispatch={props.dispatch}
        setModalMode={setModalMode}
      />
      {modalMode && (
        <Task
          info={props.info}
          modalMode={modalMode}
          dispatch={props.dispatch}
          setModalMode={setModalMode}
        />
      )}
    </div>
  );
};

export default memo(Tasks);
