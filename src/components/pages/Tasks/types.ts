export type TypeTasks = {
  executorName: string;
  id: number;
  name: string;
  priorityId: number;
  statusName: string;
  statusRgb: string;
};

export type TypeTags = {
  id: number;
  name: string;
};

export type TypeLifetimeItems = {
  comment: string;
  createdAt: string;
  fieldName: string | null;
  id: number;
  lifetimeType: number;
  newFieldValue: string | null;
  oldFieldValue: string | null;
  userName: string;
};

export type TypeInfo = {
  id: number;
  name: string;
  description: string;
  initiatorName: string;
  executorId: number;
  executorName: string;
  priorityName: string;
  resolutionDatePlan: string;
  lifetimeItems: TypeLifetimeItems[];
  statusId: number;
  statusName: string;
  statusRgb: string;
  tags: TypeTags[];
};

export type TypeStatuses = {
  id: number;
  rgb: string;
  name: string;
};

export type TypeUsers = {
  id: number;
  name: string;
};
