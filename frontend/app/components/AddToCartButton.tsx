import { alpha, Button } from "@mui/material";

export default function AddToCartButton() {
  const handleAdd = () => {
    console.log("Köpköpköp");
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.brand.darkCoffee, 0.65),
        color: "brand.whiteSmoke",
        "&:hover": {
          backgroundColor: (theme) =>
            alpha(theme.palette.brand.darkCoffee, 0.45),
        },
      }}
      onClick={handleAdd}
    >
      Lägg till
    </Button>
  );
}
