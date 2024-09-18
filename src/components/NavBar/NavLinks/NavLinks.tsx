import "./navLinks.sass";

const navLinksArr = ["collection", "men", "women", "about", "contact"];
const NavLinks = () => {
  return (
    <nav className='navlinks-container'>
      <ul className='navlinks__ul'>
        {navLinksArr.map((links) => {
          return (
            <li className='navlinks__li' key={links}>
              <a href={`${links}`}>{links}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
