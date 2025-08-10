import Icon from "./Icon";
import { useId } from "react";

export default function SocialIcon({ name, url }) {
  const id = useId();
  const lcase = name.toLowerCase();
  return (
    <a href={`https://${url}`} aria-labelledby={id} target="_blank">
      <span id={id} hidden>
        {name}
      </span>
      <Icon name={lcase} />
    </a>
  );
}
