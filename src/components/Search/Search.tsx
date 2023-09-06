import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "./styles.scss";

const Search = ({
  searchValue,
  handleSearchInput,
  handleSearchButton,
  handleClearButton,
}: {
  searchValue: string;
  handleSearchInput: (value: any) => void;
  handleSearchButton: () => void;
  handleClearButton: () => void;
}) => {
  return (
    <div className="search" data-testid="search">
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        sx={{ width: "100%" }}
        value={searchValue}
        onChange={handleSearchInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClearButton}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={handleSearchButton}
        variant="contained"
        disabled={!searchValue.length}
        data-testid="search-button"
      >
        Serch
      </Button>
    </div>
  );
};

export default Search;
