import { Button, Form, Input } from "antd";
import { Dispatch, memo } from "react";
import {
  thunks,
  TypeAction,
  TypeThunk,
} from "../../../../../redux/reducers/tasksReducer";
import { toPostData } from "../../../../../utils/helpers";
import { UPDATE } from "../../constants";
import { TypeValue } from "../../types";
import { createFields } from "./constants";
import styles from "./Creation.module.scss";

const { TextArea } = Input;

const validateMessages = {
  required: `Поле не должно быть пустым!`,
};

type Props = {
  dispatch: Dispatch<TypeThunk | TypeAction>;
  setModalMode: Dispatch<React.SetStateAction<string>>;
};

const Creation: React.FC<Props> = (props) => {
  function saveTask(value: TypeValue) {
    const postData = toPostData(value);
    props.setModalMode(UPDATE);
    props.dispatch(thunks.postTask(postData));
  }

  return (
    <Form onFinish={saveTask} validateMessages={validateMessages}>
      {createFields.map((field) => (
        <div key={field.id} className={styles["creation"]}>
          <label htmlFor={field.id} className={styles["creation__title"]}>
            {field.name}
          </label>
          <Form.Item name={field.name} rules={[{ required: true }]}>
            <TextArea id={field.id} className={styles["creation__area"]} />
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

export default memo(Creation);
