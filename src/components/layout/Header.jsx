import NavLinkMenu from "../UI/NavLinkMenu";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-8 bg-blue-200 shadow-md">
      <img
        className="h-6"
        src={`${import.meta.env.BASE_URL}logo.svg`}
        alt="logo"
      />
      <nav>
        <ul className="flex gap-x-14">
          <li>
            <NavLinkMenu to={"/"}>Home</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/about"}>About</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/cart"}>Cart</NavLinkMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
