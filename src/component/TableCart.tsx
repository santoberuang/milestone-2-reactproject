import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import { CardMedia } from "@mui/material";

interface CartValue {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartProps {
  cartItems: CartValue[];
  totalPrice: number;
  onClearCart: () => void;
}

const TableCart: React.FC<CartProps> = ({
  cartItems,
  totalPrice,
  onClearCart,
}) => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <Container>
      <TableContainer component={Paper} sx={{ maxHeight: 800 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {" "}
                  <CardMedia
                    component="img"
                    sx={{ height: 100, objectFit: "contain" }}
                    image={item.image}
                    alt={item.title}
                  />
                  {item.image}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell>${totalPrice}</TableCell>
            </TableRow>

            <TableRow>
              <Button onClick={handleBack}>Back </Button>
            </TableRow>

            <TableRow>
              <Button onClick={onClearCart}>Clear </Button>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableCart;
