import { Button, Icon } from "@mui/material";

const FavouriteBook = ({ handleClick, add }) => {
  return (
    <Button onClick={handleClick}>
      <p style={{ color: "red" }}>
        {add ? "usun z ulu" : "dodaj do ulubionych"}
      </p>
    </Button>
  );
};

export default FavouriteBook;
