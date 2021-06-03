import { Button } from "antd";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/reducers/tasksReducer";
import Cards from "./Cards";
import { CREATE } from "./constants";
import Task from "./Task";
import styles from "./Tasks.module.scss";
import { TypeInfo, TypeStatuses, TypeTasks, TypeUsers } from "./types";

type Props = {
  tasks: TypeTasks[];
  statuses: TypeStatuses[];
  users: TypeUsers[];
  info: TypeInfo;
  activeId: number;
  modalMode: string;
};

const Tasks: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function openCreateTaskModal() {
    dispatch(actions.setActiveId(0));
    dispatch(actions.setModalMode(CREATE));
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
      <Cards tasks={props.tasks} activeId={props.activeId} />
      {props.modalMode && (
        <Task
          statuses={props.statuses}
          users={props.users}
          info={props.info}
          modalMode={props.modalMode}
        />
      )}
    </div>
  );
};

export default memo(Tasks);
