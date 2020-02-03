import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { instagramLogo, email, linkedInLogo } from "../images";
// import menu from "../images/menu.svg";

import { THEME_COLORS } from "../constants";

const HeaderWithClasses = ({ classes, isOpen, onMenuClick, children }) => (
  <div className={classes.container}>
    <div className={classes.socialContainer}>
      <a
        href="https://www.instagram.com/createdbylis/"
        target="blank"
        className={classes.socialLink}
      >
        <img src={instagramLogo} alt="visit my instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/elisabethbruesewitz/"
        target="blank"
        className={classes.socialLink}
      >
        <img src={linkedInLogo} alt="visit my linkedIn" />
      </a>
    </div>
    <Link to={"/"} className={classes.title}>
      created by lis
    </Link>
    <a href="mailto:elisabethbruesewitz@gmail.com">
      <img src={email} alt="" className={classes.menu} />
    </a>
  </div>
);

const styles = {
  container: {
    width: "100vw",
    height: 56,
    backgroundColor: THEME_COLORS.WHITE,
    display: "flex",
    padding: 16,
    boxSizing: "border-box",
    justifyContent: "space-between",
  },
  socialContainer: {
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      marginLeft: 16,
    },
  },
  socialLink: {
    height: "100%",
    "& > *": {
      height: "100%",
    },
  },
  menu: {
    width: 30,
    marginLeft: 34,
    height: "auto",
    cursor: "pointer",
  },
  title: {
    color: THEME_COLORS.ACCENT_ONE,
    fontFamily: "norwester",
  },
};

export default injectSheet(styles)(HeaderWithClasses);
