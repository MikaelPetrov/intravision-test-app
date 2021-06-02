import { tenantguid } from "./api";

export enum Api {
  ODATA_TASKS = "ODATA_TASKS",
  API_TASK = "API_TASK",
}

export const gets = {
  [Api.ODATA_TASKS]: "odata/tasks",
  [Api.API_TASK]: `api/${tenantguid}/tasks/`,
};

export const posts = {
  [Api.API_TASK]: `api/${tenantguid}/tasks`,
};
