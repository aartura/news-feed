import { CircularProgress } from "@mui/material";
import "./styles.scss";

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress />
    </div>
  );
};

export default Loader;