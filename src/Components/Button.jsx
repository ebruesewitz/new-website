import React from "react";
import injectSheet from "react-jss";
import cx from "classnames";
import { THEME_COLORS } from "../constants";

const ButtonWithClasses = ({
  classes,
  className,
  children,
  onClick,
  kind = "primary",
}) => (
  <button
    className={cx(
      classes.button,
      {
        [classes.primary]: kind === "primary",
        [classes.secondary]: kind === "secondary",
        [classes.primaryReverse]: kind === "primaryReverse",
      },
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

const styles = {
  button: {
    fontFamily: "norwester",
    width: 200,
    height: 48,
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
    lineHeight: "inherit",
    cursor: "pointer",
    backgroundColor: "transparent",
  },
  primary: {
    backgroundColor: THEME_COLORS.ACCENT_ONE,
    border: `2px solid ${THEME_COLORS.ACCENT_ONE}`,
    color: THEME_COLORS.WHITE,
    "&:hover": {
      backgroundColor: THEME_COLORS.ACCENT_ONE_HOVER,
    },
  },
  secondary: {
    backgroundColor: THEME_COLORS.BROWN_THREE,
    border: `2px solid ${THEME_COLORS.BROWN_THREE}`,
    color: THEME_COLORS.WHITE,
  },
  primaryReverse: {
    color: THEME_COLORS.ACCENT_ONE,
    border: `2px solid ${THEME_COLORS.ACCENT_ONE}`,
    backgroundColor: THEME_COLORS.WHITE,
    "&:hover": {
      backgroundColor: THEME_COLORS.ACCENT_ONE,
      color: THEME_COLORS.WHITE,
    },
  },
};

export default injectSheet(styles)(ButtonWithClasses);
