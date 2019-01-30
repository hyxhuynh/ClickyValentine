import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="bottom">
        Clicky Game! <img alt="react" src="assets/images/react.svg" />
      </div>
      <div className="credit">
        Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" >CC 3.0 BY</a>
      </div>
      <div className="credit"><a href="http://www.github.com/hyxhuynh/ClickyGame" title="GitHub">Github: Made by Hy Huynh</a></div>
    </footer>
  );
}

export default Footer;
