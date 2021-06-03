import moment from "moment";
import { TypeInfo, TypeTasks } from "../components/pages/Tasks/types";
import { TypeStatuses, TypeUsers } from "./../components/pages/Tasks/types";

export function toTasksList(response: TypeTasks[]) {
  return response.map((obj) => ({
    executorName: obj.executorName,
    id: obj.id,
    name: obj.name,
    priorityId: obj.priorityId,
    statusName: obj.statusName,
    statusRgb: obj.statusRgb,
  }));
}

export function toStatusesList(response: TypeStatuses[]) {
  return response.map((obj) => ({
    rgb: obj.rgb,
    id: obj.id,
    name: obj.name,
  }));
}

export function toUsersList(response: TypeUsers[]) {
  return response.map((obj) => ({
    id: obj.id,
    name: obj.name,
  }));
}

export function toTaskInfo(response: TypeInfo) {
  return {
    id: response.id,
    name: response.name,
    description: response.description,
    initiatorName: response.initiatorName,
    executorId: response.executorId,
    executorName: response.executorName,
    priorityName: response.priorityName,
    resolutionDatePlan: response.resolutionDatePlan,
    lifetimeItems: response.lifetimeItems,
    statusId: response.statusId,
    statusName: response.statusName,
    statusRgb: response.statusRgb,
    tags: response.tags,
  };
}

export function toFormatTime(time: Date | string, timeFormat: string) {
  return moment(time).format(timeFormat);
}
