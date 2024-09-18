import { fireEvent, render, screen } from "@testing-library/react";
import CardContent from "./Card";


test("check content", () => {

    const mockAddToCart = jest.fn();

    render(
        <CardContent 
        id={1}
        title="test"
        description="test"
        price={1}
        images="test"
        onAddToCart={function (): void {
            throw new Error("Function not implemented.");
        }}
        onRemoveFromCart={function (): void {
            throw new Error("Function not implemented.");
        }}
        isInCart={false}
    )
    
    const testAddCart = screen.getByText(/Add to Cart/i);
    
    fireEvent.click(testAddCart);
    expect(mockAddToCart).toHaveBeenCalledTimes(1); 
})