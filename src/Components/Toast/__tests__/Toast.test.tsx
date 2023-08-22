import { render, screen } from "@testing-library/react";
import { Toast } from "../Toast";
import userEvent from "@testing-library/user-event";

describe("Toast component", () => {
  const onClose = jest.fn();

  test("User should see the toast with its default value", () => {
    render(<Toast message="This is a toast message" onClose={onClose} />);

    const title = screen.getByRole("heading", { name: /warning/i });
    expect(title).toBeInTheDocument();

    const message = screen.getByText(/this is a toast message/i);
    expect(message).toBeInTheDocument();
  });

  test("User should see a danger Toast component and close", () => {
    render(
      <Toast
        message="This is a toast message"
        onClose={onClose}
        type="danger"
      />
    );

    const title = screen.getByRole("heading", { name: /danger/i });
    expect(title).toBeInTheDocument();

    const closeDangerToastButton = screen.getByLabelText(/close danger toast/i);
    expect(closeDangerToastButton).toBeInTheDocument();

    userEvent.click(closeDangerToastButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("User should see a success Toast component and close", () => {
    render(
      <Toast
        message="This is a toast message"
        onClose={onClose}
        type="success"
      />
    );

    const title = screen.getByRole("heading", { name: /success/i });
    expect(title).toBeInTheDocument();

    const closeDangerToastButton =
      screen.getByLabelText(/close success toast/i);
    expect(closeDangerToastButton).toBeInTheDocument();

    userEvent.click(closeDangerToastButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("User should see a custom title", () => {
    render(
      <Toast
        title="This is a custom title"
        message="This is a toast message"
        onClose={onClose}
      />
    );

    const title = screen.getByRole("heading", {
      name: /this is a custom title/i,
    });
    expect(title).toBeInTheDocument();
  });
});
