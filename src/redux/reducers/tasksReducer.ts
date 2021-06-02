import { instance } from "../../api/api";
import { Api, gets, posts } from "../../api/tasksApi";
import {
  TypeInfo,
  TypePostData,
  TypeTasks,
} from "../../components/pages/Tasks/types";
import { toTaskInfo, toTasksList } from "../../utils/helpers";
import { SET_INFO, SET_TASKS } from "../actionTypes";
import { InferActionsType, InferThunksType } from "../reduxStore";

type TypeInitialState = typeof initialState;
export type TypeAction = InferActionsType<typeof actions>;
export type TypeThunk = InferThunksType<TypeAction>;

const initialState = {
  tasks: [] as TypeTasks[],
  info: {} as TypeInfo,
};

const tasksReducer = (
  state = initialState,
  action: TypeAction
): TypeInitialState => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks };
    case SET_INFO:
      return { ...state, info: action.info };
    default:
      return state;
  }
};

export const actions = {
  setTasks: (tasks: TypeTasks[]) =>
    ({
      type: SET_TASKS,
      tasks,
    } as const),
  setInfo: (info: TypeInfo) =>
    ({
      type: SET_INFO,
      info,
    } as const),
};

export const thunks = {
  getTasks: (): TypeThunk => async (dispatch) => {
    const response = await instance.get(gets[Api.ODATA_TASKS]);
    const tasksList = toTasksList(response.data.value);
    dispatch(actions.setTasks(tasksList));
  },
  getInfo:
    (id: number): TypeThunk =>
    async (dispatch) => {
      const response = await instance.get(gets[Api.API_TASK] + id);
      const taskInfo = toTaskInfo(response.data);
      dispatch(actions.setInfo(taskInfo));
    },
  postTask:
    (value: TypePostData): TypeThunk =>
    async (dispatch) => {
      await instance.post(posts[Api.API_TASK], value);
      const response = await instance.get(gets[Api.ODATA_TASKS]);
      const tasksList = toTasksList(response.data.value);
      dispatch(actions.setTasks(tasksList));
    },
};

export default tasksReducer;
