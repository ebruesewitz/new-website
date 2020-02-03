import React from "react";
import injectSheet from "react-jss";

const PortfolioMockupContainer = ({ classes, imageUrl, href }) => {
  const ContainerTag = href ? "a" : "div";
  return (
    <ContainerTag
      className={classes.container}
      href={href}
      target={href && "blank"}
    >
      <img src={imageUrl} className={classes.image} />
    </ContainerTag>
  );
};

const styles = {
  container: {
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    width: 350,
    height: 350,
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "auto",
  },
};

export default injectSheet(styles)(PortfolioMockupContainer);
