import { Button, Icon } from "@mui/material";

const FavouriteBook = ({ handleClick, add }) => {
  return (
    <Button onClick={handleClick}>
      <p style={{ color: "red" }}>{add ? "ADD" : "ODD"}</p>
    </Button>
  );
};

export default FavouriteBook;
