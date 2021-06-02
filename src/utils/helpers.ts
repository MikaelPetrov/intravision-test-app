import {
  TypeInfo,
  TypePostData,
  TypeTasks,
  TypeValue,
} from "../components/pages/Tasks/types";

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

export function toTaskInfo(response: TypeInfo) {
  return {
    id: response.id,
    name: response.name,
    description: response.description,
    initiatorName: response.initiatorName,
    executorName: response.executorName,
    priorityName: response.priorityName,
    resolutionDatePlan: response.resolutionDatePlan,
    lifetimeItems: response.lifetimeItems,
    tags: response.tags,
  };
}

export function toPostData(value: TypeValue) {
  const postData: TypePostData = {
    name: value.Название,
    description: value.Описание,
  };

  return postData;
}
