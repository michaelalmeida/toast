import { useState, FormEvent } from "react";
import { Button } from "../../UI/Button";
import { useToast } from "../Toast";
import { Buttons, Form, HomeWrapper } from "./Home.style";
import { AddToastProps, ToastType } from "../../Model/Toast.model";
import { Input, Select } from "../../UI/Inputs";

export const Home = () => {
  const { addToast } = useToast();
  const [toastPlayground, setToastPlayground] = useState<AddToastProps>({
    title: "",
    message: "",
    type: "warning",
    timer: 6000,
  });

  const handleToastPlayground = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setToastPlayground((prevToast) => ({ ...prevToast, [name]: value }));
  };

  const handleOnSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (
      value &&
      (value === "warning" || value === "success" || value === "danger")
    ) {
      setToastPlayground((prevToast) => ({ ...prevToast, type: value }));
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToast({
      message: toastPlayground.message,
      type: toastPlayground.type as ToastType,
      timer: toastPlayground.timer,
    });
  };

  return (
    <HomeWrapper>
      <Buttons>
        <Button
          type="button"
          onClick={() =>
            addToast({
              title:
                "Warning with a long text see how the component deals with long text",
              message: "This is a warning toast",
            })
          }
        >
          Open warning toast
        </Button>
        <Button
          type="button"
          onClick={() =>
            addToast({
              title: "Success",
              message: "This is a warning toast",
              type: "success",
            })
          }
        >
          Open success toast
        </Button>
        <Button
          type="button"
          onClick={() =>
            addToast({
              message: "This is a warning toast",
              type: "danger",
              timer: 15000,
            })
          }
        >
          Open danger toast
        </Button>
      </Buttons>
      <Form onSubmit={handleOnSubmit}>
        <h3>Set your own toast:</h3>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={toastPlayground.title}
          onChange={handleToastPlayground}
        />
        <Input
          type="text"
          name="message"
          placeholder="Message"
          value={toastPlayground.message}
          onChange={handleToastPlayground}
          required
        />
        <Input
          type="number"
          name="timer"
          placeholder="Timer"
          value={toastPlayground.timer}
          onChange={handleToastPlayground}
        />
        <Select
          value={toastPlayground.type}
          name="type"
          onChange={handleOnSelectType}
        >
          <option value="warning">Warning</option>
          <option value="success">Success</option>
          <option value="danger">Danger</option>
        </Select>
        <Button type="submit">Trigger</Button>
      </Form>
    </HomeWrapper>
  );
};
