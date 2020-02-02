import React from "react";
import Text from "./Text";
import injectSheet from "react-jss";

const SummarySection = ({ Icon, children, classes, headingText }) => (
  <div className={classes.container}>
    <div>
      <div className={classes.iconContainer}>
        <Icon />
      </div>
      <Text accent className={classes.header}>
        {headingText}
      </Text>
    </div>
    {children}
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 300,
    minHeight: 400,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 136,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 32,
    margin: "24px 0px 16px 0px",
    textTransform: "uppercase",
  },
};

export default injectSheet(styles)(SummarySection);
