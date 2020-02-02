import React from "react";
import injectSheet from "react-jss";
import {
  Header,
  Button,
  Text,
  SummarySection,
  Input,
  Thumbnail,
} from "../Components";
import {
  profileImage,
  bannerImage,
  parisThumbnail,
  smnpThumbnail,
  oahuThumbnail,
} from "../images";
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
        <Button>work with me</Button>
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
        When I’m not coding, you can find me taking pictures, reading at a local
        coffee shop, or planning my next big trip. I’ve been lucky enough to
        have the flexibility to travel frequently over the past few years, and I
        love sharing those experiences with others.
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
        <Button kind="primaryReverse" className={classes.summarySectionButton}>
          read my blog
        </Button>
      </SummarySection>
      <SummarySection Icon={DevelopmentIcon} headingText="Development">
        <Text>
          I’m an expert in front end web development, but I have experience
          building the systems, databases, and apps to support websites too.
          Have a project for me?
        </Text>
        <Button kind="primaryReverse" className={classes.summarySectionButton}>
          view my work
        </Button>
      </SummarySection>
      <SummarySection Icon={PhotographyIcon} headingText="Photography">
        <Text>
          I love capturing the essence of a place or a person through a simple
          photo. Interested in setting up a photography session?
        </Text>
        <Button kind="primaryReverse" className={classes.summarySectionButton}>
          see my photos
        </Button>
      </SummarySection>
    </div>
    <div className={classes.newsletterContainer}>
      <Text className={classes.newsletterContainerText}>
        join the mailing list &amp; keep
        <br /> up to date on my latest adventures!
      </Text>
      <Input placeholder="email address"></Input>
      <Button>Subscribe</Button>
    </div>
    <div className={classes.portfolio}>
      <span className={classes.portfolioHeading}>My Work</span>
      <div className={classes.portfolioContent}>
        <div className={classes.blogThumbnailContainer}>
          <Thumbnail
            className={classes.blogThumbnail}
            src={parisThumbnail}
            href="/blog/paris"
          />
          <Thumbnail
            className={classes.blogThumbnail}
            src={smnpThumbnail}
            href="/blog/smnp"
          />
          <Thumbnail
            className={classes.blogThumbnail}
            src={oahuThumbnail}
            href="/blog/oahu"
          />
        </div>
      </div>
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
    alignItems: "stretch",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: 80,
    },
  },
  summarySectionButton: {
    marginTop: 32,
  },
  introSection: {
    padding: 80,
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    height: 600,
    width: "auto",
  },
  title: {
    fontFamily: "norwester",
    fontSize: 48,
    textTransform: "uppercase",
  },
  introText: {
    display: "flex",
    flexDirection: "column",
    width: 360,
    marginLeft: 80,
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
    padding: 80,
    boxSizing: "border-box",
    fontSize: 16,
    letterSpacing: 1.3,
    "& > * + *": {
      marginTop: "2em",
    },
  },
  banner: {
    width: "100vw",
    height: "80vh",
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
      width: "57%",
    },
  },
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
  portfolio: {
    padding: 64,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  portfolioHeading: {
    fontFamily: "norwester",
    fontSize: 72,
    marginBottom: 72,
  },
  portfolioContent: {
    width: "100%",
  },
  blogThumbnailContainer: {
    width: "55%",
    "&> *+*": {
      marginTop: 24,
    },
  },
  blogThumbnail: {
    width: "100%",
  },
};

export default injectSheet(styles)(HomePageWithClasses);
