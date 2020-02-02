import React from "react";
import cx from "classnames";
import injectSheet from "react-jss";

const Text = ({ className, classes, children, accent, ...props }) => (
  <p
    className={cx(className, classes.text, { [classes.accent]: accent })}
    {...props}
  >
    {children}
  </p>
);

const styles = {
  text: {
    fontFamily: "montserrat",
    margin: 0,
  },
  accent: {
    fontFamily: "norwester",
  },
};

export default injectSheet(styles)(Text);
