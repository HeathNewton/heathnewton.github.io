import SocialIcon from "./SocialIcon";

export default function SocialIcons() {
  return (
    <ul className="social-icons nobm" role="list">
      <li className="social-icons__twitter">
        <SocialIcon name="X-Twitter" url="x.com/BrianDMilne" />
      </li>
      <li className="social-icons__instagram">
        <SocialIcon name="Instagram" url="www.instagram.com/heathnewton/" />
      </li>
      <li className="social-icons__github">
        <SocialIcon name="Github" url="github.com/HeathNewton" />
      </li>
      <li className="social-icons__linkedin">
        <SocialIcon
          name="LinkedIn"
          url="www.linkedin.com/in/brian-milne-04448b167"
        />
      </li>
    </ul>
  );
}
