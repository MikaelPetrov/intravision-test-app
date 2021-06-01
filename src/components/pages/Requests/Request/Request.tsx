import { Button, Form, Input } from "antd";
import { memo } from "react";
import iconClose from "../../../../assets/icons/iconClose.png";
import { createFileds, NAME } from "./constants";
import styles from "./Request.module.scss";

const { TextArea } = Input;

const validateMessages = {
  required: `Требуется ввести поле!`,
};

type Props = {
  setCreateMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Request: React.FC<Props> = (props) => {
  function closeCreateMenu() {
    props.setCreateMenu(false);
  }

  return (
    <div className={styles["request"]}>
      <div className={styles["request__header"]}>
        Новая заявка
        <img
          onClick={closeCreateMenu}
          src={iconClose}
          alt="close"
          className={styles["request__close"]}
        />
      </div>
      <Form
        validateMessages={validateMessages}
        className={styles["request__content"]}
      >
        {createFileds.map((field) => (
          <div key={field.id} className={styles["request__field"]}>
            <label htmlFor={field.id} className={styles["request__title"]}>
              {field.name}
            </label>
            <Form.Item
              name={[field.name, field.name]}
              rules={
                field.type === NAME
                  ? [{ required: true }]
                  : [{ required: false }]
              }
            >
              <TextArea id={field.id} className={styles["request__area"]} />
            </Form.Item>
          </div>
        ))}
        <div className={styles["save"]}>
          <Button
            type="primary"
            shape="circle"
            className={styles["save__button"]}
          >
            Сохранить
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default memo(Request);
