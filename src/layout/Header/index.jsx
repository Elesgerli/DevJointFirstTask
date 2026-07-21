import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="headerWrapper">
          <a href="#home" className="headerLogo">
            NovaTech
          </a>

          <nav
            className={`headerNav ${isMenuOpen ? "active" : ""}`}
            aria-label="Main Navigation"
          >
            <ul className="headerNavList">

              <li className="headerNavItem">
                <a href="#about" onClick={closeMenu}>
                  Haqqımızda
                </a>
              </li>

              <li className="headerNavItem">
                <a href="#gallery" onClick={closeMenu}>
                  Qalereya
                </a>
              </li>

              <li className="headerNavItem">
                <a href="#contact" onClick={closeMenu}>
                  Əlaqə
                </a>
              </li>

            </ul>
          </nav>

          <button
            className="headerMenu"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>

        </div>

      </div>

      <div
        className={`headerOverlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

    </header>
  );
};

export default Header;