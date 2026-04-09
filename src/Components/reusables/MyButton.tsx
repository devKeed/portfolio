import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const isExternal = (link: string) =>
  link.startsWith("http") || link.startsWith("mailto:") || link.startsWith("tel:");

const isAnchor = (link: string) => link.startsWith("#");

type MyButtonProps = {
  text: string;
  link: string;
  subdued?: boolean;
};

const content = (text: string, subdued?: boolean) => (
  <span className={`button-link${subdued ? " button-link--subdued" : ""}`}>
    <span>{text}</span>
    <ArrowOutwardIcon sx={{ fontSize: 18 }} />
  </span>
);

const MyButton = ({ text, link, subdued = false }: MyButtonProps) => {
  if (isExternal(link) || isAnchor(link)) {
    return (
      <a
        href={link}
        className="button-link-anchor"
        target={isExternal(link) && !link.startsWith("mailto:") && !link.startsWith("tel:") ? "_blank" : undefined}
        rel={isExternal(link) && !link.startsWith("mailto:") && !link.startsWith("tel:") ? "noreferrer" : undefined}
      >
        {content(text, subdued)}
      </a>
    );
  }

  return (
    <Link to={link} className="button-link-anchor">
      {content(text, subdued)}
    </Link>
  );
};

export default MyButton;
