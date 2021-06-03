import { Page, paths } from "../../../core/routes/constants";

export function getKeys(location: string) {
  switch (location) {
    case paths[Page.KNOWLEDGEBASE]:
      return "1";
    case paths[Page.TASKS]:
      return "2";
    case paths[Page.STAFF]:
      return "3";
    case paths[Page.CLIENTS]:
      return "4";
    case paths[Page.ASSETS]:
      return "5";
    case paths[Page.SETTINGS]:
      return "6";
    default:
      return "0";
  }
}
