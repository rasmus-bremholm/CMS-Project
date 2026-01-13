import { Button } from "@mui/material";

export default function AddToCartButton() {
  const handleAdd = () => {
    console.log("Köpköpköp");
  };

  return (
    <Button variant="contained" onClick={handleAdd}>
      Lägg till
    </Button>
  );
}
