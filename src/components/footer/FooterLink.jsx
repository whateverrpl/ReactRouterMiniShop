import { Link } from "react-router-dom";

function FooterLink({ children }) {
  return (
    <li>
      <Link className="hover:underline" to="#">
        {children}
      </Link>
    </li>
  );
}

export default FooterLink;
