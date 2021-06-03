import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunks } from "../../../redux/reducers/tasksReducer";
import { TypeAppState } from "../../../redux/reduxStore";
import Tasks from "./Tasks";

const TasksContainer: React.FC = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state: TypeAppState) => ({
    tasks: state.tasksPage.tasks,
    statuses: state.tasksPage.statuses,
    users: state.tasksPage.users,
    info: state.tasksPage.info,
    activeId: state.tasksPage.activeId,
    modalMode: state.tasksPage.modalMode,
  }));

  useEffect(() => {
    dispatch(thunks.getTasks());
    dispatch(thunks.getStatuses());
    dispatch(thunks.getUsers());
  }, [dispatch]);

  return (
    <Tasks
      tasks={tasksState.tasks}
      statuses={tasksState.statuses}
      users={tasksState.users}
      info={tasksState.info}
      activeId={tasksState.activeId}
      modalMode={tasksState.modalMode}
    />
  );
};

export default memo(TasksContainer);
