import { Button, Form, Input } from "antd";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { actions, thunks } from "../../../../../redux/reducers/tasksReducer";
import { UPDATE } from "../../constants";
import { creatorFields } from "./constants";
import styles from "./Creator.module.scss";

const { TextArea } = Input;

const validateMessages = {
  required: `Поле не должно быть пустым!`,
};

type Props = {};

const Creator: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function saveTask(value: any) {
    const postData = {
      name: value["Название"],
      description: value["Описание"],
    };
    dispatch(thunks.postTask(postData));
    dispatch(actions.setModalMode(UPDATE));
  }

  return (
    <Form onFinish={saveTask} validateMessages={validateMessages}>
      {creatorFields.map((field) => (
        <div key={field.id} className={styles["creator"]}>
          <label htmlFor={field.id} className={styles["creator__title"]}>
            {field.name}
          </label>
          <Form.Item name={field.name} rules={[{ required: true }]}>
            <TextArea id={field.id} className={styles["creator__area"]} />
          </Form.Item>
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
  );
};

export default memo(Creator);
