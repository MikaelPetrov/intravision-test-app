import { Select } from "antd";
import nounCalendar from "../../../../../assets/icons/nounCalendar.png";
import { TypeInfo, TypeStatuses, TypeUsers } from "../../types";
import styles from "./Changer.module.scss";
import {
  CREATED,
  DATE,
  EXECUTOR,
  INITIATOR,
  PRIORITY,
  TAGS,
} from "./constants";
import { getDate } from "./getDate";

const { Option } = Select;

type Props = {
  statuses: TypeStatuses[];
  users: TypeUsers[];
  info: TypeInfo;
};

export function getSiderInfo(
  props: Props,
  type: string,
  handleExecutorChange: (value: any) => void
) {
  switch (type) {
    case INITIATOR:
      return <>{props.info.initiatorName}</>;
    case CREATED:
      return <>Маркова Анна</>; // not have data from api...
    case EXECUTOR:
      return (
        <>
          <Select
            bordered={false}
            onChange={handleExecutorChange}
            value={props.info.executorName}
            className={styles["info__users"]}
          >
            {props.users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.name}
              </Option>
            ))}
          </Select>
        </>
      );
    case PRIORITY:
      return <>{props.info.priorityName}</>;
    case DATE:
      return (
        <div className={styles["info__date"]}>
          <img
            src={nounCalendar}
            alt="Calendar"
            className={styles["calendar"]}
          />
          {getDate(props.info.resolutionDatePlan, DATE)}
        </div>
      );
    case TAGS:
      return (
        <>
          {props.info.tags?.map((tag) => (
            <div key={tag.id} className={styles["info__tag"]}>
              {tag.name}
            </div>
          ))}
        </>
      );
    default:
      break;
  }
}
