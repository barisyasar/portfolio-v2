import HeaderLg from "./HeaderLg";
import HeaderXs from "./HeaderXs";

function Header() {
  return (
    <header>
      <div className="container my-2 lg:my-4">
        <HeaderLg />
        <HeaderXs />
      </div>
    </header>
  );
}

export default Header;
