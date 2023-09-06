import { CircularProgress } from "@mui/material";
import "./styles.scss";

const Loader = () => {
  return (
    <div className="loader" data-testid="loader">
      <CircularProgress />
    </div>
  );
};

export default Loader;