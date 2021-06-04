import { Button, Form, Input, Select } from "antd";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { thunks } from "../../../../../redux/reducers/tasksReducer";
import { TypeInfo, TypeStatuses, TypeUsers } from "../../types";
import styles from "./Changer.module.scss";
import { changerFields, COMMENT, siderInfo } from "./constants";
import { getDate } from "./getDate";
import { getSiderInfo } from "./getSiderInfo";

const { TextArea } = Input;
const { Option } = Select;

const validateMessages = {
  required: `Поле не должно быть пустым!`,
};

type Props = {
  statuses: TypeStatuses[];
  users: TypeUsers[];
  info: TypeInfo;
};

const Changer: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function handleCommentChange(value: any) {
    const putData = {
      id: props.info.id,
      statusId: props.info.statusId,
      comment: value["Добавить комментарий"],
      ExecutorId: props.info.executorId,
    };
    dispatch(thunks.putData(putData));
  }

  function handleStatusChange(value: any) {
    const putData = {
      id: props.info.id,
      StatusId: value,
      ExecutorId: props.info.executorId,
    };
    dispatch(thunks.putData(putData));
  }

  function handleExecutorChange(value: any) {
    const putData = {
      id: props.info.id,
      StatusId: props.info.statusId,
      ExecutorId: value,
    };
    dispatch(thunks.putData(putData));
  }

  return (
    <div className={styles["changer"]}>
      <div className={styles["content"]}>
        <Form
          onFinish={handleCommentChange}
          validateMessages={validateMessages}
        >
          {changerFields.map((field) => (
            <div key={field.id} className={styles["content__field"]}>
              <label htmlFor={field.id} className={styles["content__title"]}>
                {field.name}
              </label>
              {field.type === COMMENT ? (
                <Form.Item name={field.name} rules={[{ required: true }]}>
                  <TextArea id={field.id} className={styles["content__area"]} />
                </Form.Item>
              ) : (
                <div className={styles["content__area"]}>
                  {props.info.description}
                </div>
              )}
            </div>
          ))}
          <div className={styles["save"]}>
            <Button
              type="primary"
              shape="circle"
              htmlType="submit"
              className={styles["save__button"]}
            >
              Сохранить
            </Button>
          </div>
        </Form>
        {props.info.lifetimeItems?.length ? (
          <div className={styles["chat"]}>
            {props.info.lifetimeItems.map((item) => (
              <div key={item.id} className={styles["chat__header"]}>
                <div className={styles["avatar"]}>{/* avatar... */}</div>
                <div className={styles["user"]}>
                  <div className={styles["user__name"]}>{item.userName}</div>
                  <div className={styles["user__date"]}>
                    {getDate(item.createdAt, COMMENT)}
                  </div>
                  <div className={styles["user__comment"]}>{item.comment}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles["sider"]}>
        <div className={styles["status"]}>
          <div
            className={styles["status__color"]}
            style={{ background: props.info.statusRgb }}
          />
          <Select
            bordered={false}
            onChange={handleStatusChange}
            value={props.info.statusName}
            className={styles["status__name"]}
          >
            {props.statuses.map((status) => (
              <Option key={status.id} value={status.id}>
                {status.name}
              </Option>
            ))}
          </Select>
        </div>
        {siderInfo.map((info) => (
          <div key={info.id} className={styles["info"]}>
            <div className={styles["info__name"]}>{info.name}</div>
            {getSiderInfo(props, info.type, handleExecutorChange)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Changer);
