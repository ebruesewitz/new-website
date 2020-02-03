import React from "react";
import cx from "classnames";
import injectSheet from "react-jss";

const Text = ({
  className,
  classes,
  children,
  accent,
  Tag = "p",
  ...props
}) => (
  <Tag
    className={cx(className, classes.text, { [classes.accent]: accent })}
    {...props}
  >
    {children}
  </Tag>
);

const styles = {
  text: {
    fontFamily: "montserrat",
    margin: "0 auto",
    maxWidth: 1000,
  },
  accent: {
    fontFamily: "norwester",
  },
};

export default injectSheet(styles)(Text);
