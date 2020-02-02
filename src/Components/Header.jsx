import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import instagramLogo from "../images/instagramLogo.svg";
import linkedInLogo from "../images/linkedInLogo.svg";
import menu from "../images/menu.svg";

import { THEME_COLORS } from "../constants";

const HeaderWithClasses = ({ classes, isOpen, onMenuClick, children }) => (
  <div className={classes.container}>
    <div className={classes.socialContainer}>
      <Link to={`/`} className={classes.socialLink}>
        <img src={instagramLogo} alt="visit my instagram" />
      </Link>
      <Link to={`/`} className={classes.socialLink}>
        <img src={linkedInLogo} alt="visit my linkedIn" />
      </Link>
    </div>
    <Link to={"/"} className={classes.title}>
      created by lis
    </Link>
    <img src={menu} alt="" className={classes.menu} />
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
    height: 12,
    width: "auto",
  },
  title: {
    color: THEME_COLORS.ACCENT_ONE,
    fontFamily: "norwester",
  },
};

export default injectSheet(styles)(HeaderWithClasses);
