import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
      }}
    >
      <IconButton onClick={onDecrease}>
        <RemoveIcon sx={{ color: "white" }} />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={onIncrease}>
        <AddIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};
