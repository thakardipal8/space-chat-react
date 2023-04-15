import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import LoginContainer from "../containers/LoginContainer";

describe("Login Container", () => {
  test("Load login component", () => {
    render(<LoginContainer />);
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
