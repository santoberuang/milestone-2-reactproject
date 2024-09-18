import React from "react";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Products from "./Products";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { Await } from "react-router-dom";
import Cart from "./Cart";

// test text in content

test("check content", () => {
  render(
    <Products
      onAddToCart={function (id: number): void {
        throw new Error("Function not implemented.");
      }}
      onRemoveFromCart={function (id: number): void {
        throw new Error("Function not implemented.");
      }}
      cart={[]}
    />
  );
  const cekText = screen.getByText(/Details/i);
  expect(cekText).toBeInTheDocument();
});

// test mocked Axios module

jest.mock("axios");

const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Product test axios", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "test",
          description: "test",
          price: 1,
          images: "test",
          Cart: 1,
        },
      ],
    });
  });

  //test render axios
  test("test axios", async () => {
    render(<Products />);
    await waitFor(() => {
      expect(screen.getByText("Details")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("test")).toBeInTheDocument();
    });
  });

  //test post axios
  test("test add to cart", async () => {
    render(<Products />);

    const testAddCart = screen.getByText(/Add to Cart/i);
    const onAddToCart = screen.getByText(/Add to Cart/i);
    fireEvent.change(testAddCart, { target: { value: 1 } });
    fireEvent.click(onAddToCart);

    await waitFor(() => {
      expect(screen.getByText("Cart: 1")).toBeInTheDocument();
    });
  });

  //test remove from cart
  //   test("test remove from cart", async () => {
  //     render(<Products />)

  //     const removeButton = screen.getByText(/Remove from Cart/i);
  //     fireEvent.click(removeButton);

  //     expect(mockAxios.delete)
});
