import React from "react";
import headerStyles from "../styles/Header.module.css";
const Header = () => {
  const x = 4;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WEB</span>Dev
      </h1>
      <p className={headerStyles.description}>
        Keep us updated about latest news
      </p>
      {/* styled jsx read about this */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
