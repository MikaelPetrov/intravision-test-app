import { tenantguid } from "./api";

export enum Api {
  ODATA_TASKS = "ODATA_TASKS",
  API_TASK = "API_TASK",
  API_STATUSES = "API_STATUSES",
  API_USERS = "API_USERS",
}

export const gets = {
  [Api.ODATA_TASKS]: "odata/tasks",
  [Api.API_STATUSES]: `api/${tenantguid}/statuses`,
  [Api.API_USERS]: `api/${tenantguid}/users`,
  [Api.API_TASK]: `api/${tenantguid}/tasks/`,
};

export const posts = {
  [Api.API_TASK]: `api/${tenantguid}/tasks`,
};

export const puts = {
  [Api.API_TASK]: `api/${tenantguid}/tasks`,
};
