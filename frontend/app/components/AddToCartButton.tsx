import { alpha, Button } from "@mui/material";
import { useCart } from "../context/CartContext";
import { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  /*   const handleAdd = () => {
    console.log("Köpköpköp");
  }; */

  //lägger till logiken som finns i cartContext för test t.v.
  const { addItem } = useCart();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: theme => alpha(theme.palette.brand.darkCoffee, 0.65),
        color: "brand.whiteSmoke",
        "&:hover": {
          backgroundColor: theme => alpha(theme.palette.brand.darkCoffee, 0.45),
        },
      }}
      onClick={() => addItem(product)}
    >
      Lägg till
    </Button>
  );
}
