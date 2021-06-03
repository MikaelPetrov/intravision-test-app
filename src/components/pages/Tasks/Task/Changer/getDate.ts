import { toFormatTime } from "../../../../../utils/helpers";
import { COMMENT, DATE } from "./constants";

export function getDate(time: string, type: string) {
  switch (type) {
    case COMMENT:
      return toFormatTime(time, "Do MMMM, h:mm") + " прокомментировал";
    case DATE:
      return toFormatTime(time, "L");
    default:
      break;
  }
}
