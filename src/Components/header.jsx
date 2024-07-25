import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef();
  const [links] = useState(["Features", "Team", "SignIn"]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        headerRef.current.style.background = "#181e2a";
        headerRef.current.style.padding = "20px 0px";
      } else {
        headerRef.current.style.background = "#1c2230";
        headerRef.current.style.padding = "40px 0px";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="bg-secondaryColor py-[40px] sticky top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container mx-auto flex flex-col justify-between items-center sm:flex-row">
        <a href="/">
          <img src="./images/logo.svg" alt="" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="nav"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
