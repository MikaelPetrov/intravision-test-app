import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunks } from "../../../redux/reducers/tasksReducer";
import { TypeAppState } from "../../../redux/reduxStore";
import Tasks from "./Tasks";

const TasksContainer: React.FC = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state: TypeAppState) => ({
    tasks: state.tasksPage.tasks,
    info: state.tasksPage.info,
  }));

  useEffect(() => {
    dispatch(thunks.getTasks());
  }, [dispatch]);

  return (
    <Tasks
      tasks={tasksState.tasks}
      info={tasksState.info}
      dispatch={dispatch}
    />
  );
};

export default memo(TasksContainer);
