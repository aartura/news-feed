import { Button } from "@mui/material";
import "./styles.scss";

const NoNews = ({
  handleButton,
  text,
  buttonText,
}: {
  handleButton: () => void;
  text: string;
  buttonText: string;
}) => {
  return (
    <div className="no-news">
      <h2>{text}</h2>
      <Button onClick={() => handleButton()} variant="contained">
        {buttonText}
      </Button>
    </div>
  );
};

export default NoNews;
