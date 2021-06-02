export type TypeTasks = {
  executorName: string;
  id: number;
  name: string;
  priorityId: number;
  statusName: string;
  statusRgb: string;
};

export type TypeInfo = {
  id: number;
  name: string;
  description: string;
  initiatorName: string;
  executorName: string;
  priorityName: string;
  resolutionDatePlan: string;
  lifetimeItems: any;
  tags: any;
};

export type TypePostData = {
  name: string;
  description: string;
};

export type TypeValue = {
  Название: string;
  Описание: string;
};
