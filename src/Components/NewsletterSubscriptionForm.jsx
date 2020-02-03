import React from "react";
import { Input, Text, Button } from "./";
import { THEME_COLORS } from "../constants";

const NewsletterSubscriptionForm = ({ classes }) => (
  <div className={classes.newsletterContainer}>
    <Text className={classes.newsletterContainerText}>
      join the mailing list &amp; keep
      <br /> up to date on my latest adventures!
    </Text>
    <Input placeholder="email address"></Input>
    <Button>Subscribe</Button>
  </div>
);

const styles = {
  newsletterContainer: {
    backgroundColor: THEME_COLORS.BROWN_TWO,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 16px",
    "& > *+*": {
      marginLeft: 32,
    },
  },
  newsletterContainerText: {
    color: THEME_COLORS.WHITE,
    textAlign: "center",
  },
};

export default injectSheet(styles)(NewsletterSubscriptionForm);
