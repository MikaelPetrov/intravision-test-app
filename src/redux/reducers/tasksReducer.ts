import { instance } from "../../api/api";
import { Api, gets, posts, puts } from "../../api/tasksApi";
import { TypeInfo, TypeTasks } from "../../components/pages/Tasks/types";
import {
  toStatusesList,
  toTaskInfo,
  toTasksList,
  toUsersList,
} from "../../utils/helpers";
import {
  SET_ACTIVE_ID,
  SET_INFO,
  SET_MODAL_MODE,
  SET_STATUSES,
  SET_TASKS,
  SET_USERS,
} from "../actionTypes";
import { InferActionsType, InferThunksType } from "../reduxStore";
import { TypeStatuses, TypeUsers } from "./../../components/pages/Tasks/types";

type TypeInitialState = typeof initialState;
export type TypeAction = InferActionsType<typeof actions>;
export type TypeThunk = InferThunksType<TypeAction>;

const initialState = {
  tasks: [] as TypeTasks[],
  statuses: [] as TypeStatuses[],
  users: [] as TypeUsers[],
  info: {} as TypeInfo,
  activeId: 0 as number,
  modalMode: "" as string,
};

const tasksReducer = (
  state = initialState,
  action: TypeAction
): TypeInitialState => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks };
    case SET_STATUSES:
      return { ...state, statuses: action.statuses };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_INFO:
      return { ...state, info: action.info };
    case SET_ACTIVE_ID:
      return { ...state, activeId: action.activeId };
    case SET_MODAL_MODE:
      return { ...state, modalMode: action.modalMode };
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
  setStatuses: (statuses: TypeStatuses[]) =>
    ({
      type: SET_STATUSES,
      statuses,
    } as const),
  setUsers: (users: TypeUsers[]) =>
    ({
      type: SET_USERS,
      users,
    } as const),
  setInfo: (info: TypeInfo) =>
    ({
      type: SET_INFO,
      info,
    } as const),
  setActiveId: (activeId: number) =>
    ({
      type: SET_ACTIVE_ID,
      activeId,
    } as const),
  setModalMode: (modalMode: string) =>
    ({
      type: SET_MODAL_MODE,
      modalMode,
    } as const),
};

export const thunks = {
  getTasks: (): TypeThunk => async (dispatch) => {
    const response = await instance.get(gets[Api.ODATA_TASKS]);
    const tasksList = toTasksList(response.data.value);
    dispatch(actions.setTasks(tasksList));
  },
  getStatuses: (): TypeThunk => async (dispatch) => {
    const response = await instance.get(gets[Api.API_STATUSES]);
    const statusesList = toStatusesList(response.data);
    dispatch(actions.setStatuses(statusesList));
  },
  getUsers: (): TypeThunk => async (dispatch) => {
    const response = await instance.get(gets[Api.API_USERS]);
    const usersList = toUsersList(response.data);
    dispatch(actions.setUsers(usersList));
  },
  getInfo:
    (id: number): TypeThunk =>
    async (dispatch) => {
      const response = await instance.get(gets[Api.API_TASK] + id);
      const taskInfo = toTaskInfo(response.data);
      dispatch(actions.setInfo(taskInfo));
    },
  postTask:
    (value: any): TypeThunk =>
    async (dispatch) => {
      const postResponse = await instance.post(posts[Api.API_TASK], value);

      const infoResponse = await instance.get(
        gets[Api.API_TASK] + postResponse.data
      );
      const taskInfo = toTaskInfo(infoResponse.data);
      dispatch(actions.setInfo(taskInfo));

      const tasksResponse = await instance.get(gets[Api.ODATA_TASKS]);
      const tasksList = toTasksList(tasksResponse.data.value);
      dispatch(actions.setTasks(tasksList));
    },
  putData:
    (value: any): TypeThunk =>
    async (dispatch) => {
      await instance.put(puts[Api.API_TASK], value);
      const response = await instance.get(gets[Api.API_TASK] + value.id);
      const taskInfo = toTaskInfo(response.data);
      dispatch(actions.setInfo(taskInfo));
    },
};

export default tasksReducer;
