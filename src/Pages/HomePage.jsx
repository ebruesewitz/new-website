import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { Header, Button, Text, SummarySection } from "../Components";
import { profileImage, bannerImage } from "../images";
import { THEME_COLORS } from "../constants";
import { DevelopmentIcon, PhotographyIcon, TravelIcon } from "../Icons";

const HomePageWithClasses = ({ classes }) => (
  <div className={classes.container}>
    <Header />
    <div className={classes.introSection}>
      <img src={profileImage} alt="" className={classes.profileImage} />
      <div className={classes.introText}>
        <span className={classes.title}>
          Hi.
          <br />
          I’m Lis.
        </span>
        <span className={classes.descriptionText}>
          fearless traveler, passionate creative, and innovative developer.
        </span>
        <Link to={"/work/development"}>
          <Button>work with me</Button>
        </Link>
      </div>
    </div>
    <div className={classes.bio}>
      <Text>
        Hey, it’s really nice to meet you. I’m a freelance developer and
        photographer based in Cincinnati, Ohio. As a woman in technology, I feel
        I have a unique perspective to offer. I have experience in front end
        design and development, marketing, and entrepreneurship. I’m passionate
        about bridging the gap between developers and designers, and I believe
        in doing work that matters.
      </Text>
      <Text>
        When I’m not coding, you can find me reading at a local coffee shop,
        running, climbing, or planning my next big trip. I’ve been lucky enough
        to have the flexibility to travel frequently over the past few years,
        and I love sharing those experiences with others.
      </Text>
      <Text>
        Whether you’re here to check out my travel advice or are considering
        working with me, welcome. I’m happy you’re here!
      </Text>
    </div>
    <div className={classes.banner}>
      <span>Let’s create something together.</span>
    </div>
    <div className={classes.summarySectionsContainer}>
      <SummarySection Icon={TravelIcon} headingText="Travel">
        <Text>
          I’ve been lucky enough to visit a lot of beautiful places around the
          world. Curious about how I travel on a budget? Interested in some of
          the places I’ve been?
        </Text>
        <Text accent className={classes.summarySectionComingSoon}>
          Blog coming soon
        </Text>
      </SummarySection>
      <SummarySection Icon={DevelopmentIcon} headingText="Development">
        <Text>
          I’m an expert in front end web development, but I have experience
          building the systems, databases, and apps to support websites too.
          Have a project for me?
        </Text>
        <Link to={"/work/development"}>
          <Button
            kind="primaryReverse"
            className={classes.summarySectionButton}
          >
            view my work
          </Button>
        </Link>
      </SummarySection>
      <SummarySection Icon={PhotographyIcon} headingText="Photography">
        <Text>
          I love capturing the essence of a place or a person through a simple
          photo. Interested in setting up a photography session?
        </Text>
        <Text accent className={classes.summarySectionComingSoon}>
          Portfolio coming soon
        </Text>
      </SummarySection>
    </div>
  </div>
);

const styles = {
  container: {
    minHeight: "100vh",
  },
  summarySectionsContainer: {
    padding: 88,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > * + *": {
      marginTop: 24,
    },
    "@media (min-width: 1024px)": {
      flexDirection: "row",
      alignItems: "stretch",
      "& > * + *": {
        marginLeft: 80,
      },
    },
  },
  summarySectionButton: {
    marginTop: 32,
  },
  summarySectionComingSoon: {
    color: THEME_COLORS.ACCENT_ONE,
    marginTop: 32,
    lineHeight: "48px",
  },
  introSection: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 48,
    "@media (min-width: 1024px)": {
      flexDirection: "row",
      padding: 80,
    },
  },
  profileImage: {
    height: "auto",
    width: "50%",
    "@media (min-width: 1024px)": {
      height: 600,
      width: "auto",
    },
  },
  title: {
    fontFamily: "norwester",
    fontSize: 48,
    textTransform: "uppercase",
  },
  introText: {
    display: "flex",
    flexDirection: "column",
    marginTop: 24,
    marginLeft: 0,
    maxWidth: 360,
    "@media (min-width: 1024px)": {
      marginLeft: 80,
    },
  },
  descriptionText: {
    fontSize: 16,
    letterSpacing: 1.3,
    margin: "32px 0px 48px 0px",
  },
  bio: {
    backgroundColor: THEME_COLORS.ACCENT_TWO,
    color: THEME_COLORS.WHITE,
    width: "100%",
    padding: 48,
    boxSizing: "border-box",
    fontSize: 16,
    letterSpacing: 1.3,
    "& > * + *": {
      marginTop: "2em",
    },
    "@media (min-width: 1024px)": {
      padding: 80,
    },
  },
  banner: {
    width: "100vw",
    minHeight: "80vh",
    padding: 24,
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    textTransform: "uppercase",
    color: THEME_COLORS.WHITE,
    fontFamily: "norwester",
    fontSize: 64,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      display: "block",
    },
    "@media (min-width: 481px)": {
      "& > *": {
        width: "57%",
      },
    },
  },
};

export default injectSheet(styles)(HomePageWithClasses);
