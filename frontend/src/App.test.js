import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import axios from "axios";

jest.mock("axios");

test("renders To-Do Task Manager title", async () => {
  axios.get.mockResolvedValue({ data: [] }); // ✅ mock empty task list
  render(<App />);
  const titleElement = await screen.findByText(/To-Do Task Manager/i);
  expect(titleElement).toBeInTheDocument();
});
