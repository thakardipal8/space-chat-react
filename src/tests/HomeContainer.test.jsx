import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import HomeContainer from "../containers/HomeContainer";

describe("Home Container", () => {
  test("Load Home component", () => {
    render(<HomeContainer friendOf={10} />);
    expect(screen.getByAltText(/user 9/i)).toBeInTheDocument();
    expect(screen.getByText(/user 8/i)).toBeInTheDocument();
  });
});
