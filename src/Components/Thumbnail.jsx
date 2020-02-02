import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import cx from "classnames";

const Thumbnail = ({ alt, src, className, classes, href }) => (
  <Link className={cx(classes.link, className)} to={href}>
    <img className={classes.image} src={src} alt={alt} />
  </Link>
);

const styles = {
  link: {
    display: "block",
    "&:hover": {
      opacity: 0.8,
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
};

export default injectSheet(styles)(Thumbnail);
