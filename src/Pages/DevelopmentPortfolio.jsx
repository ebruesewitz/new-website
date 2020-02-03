import React, { Fragment } from "react";
import injectSheet from "react-jss";
import {
  krogerMockup,
  blobBandMockup,
  educatingFromTheGroundUpMockup,
  madOptimistMockup,
  washmatesMockup,
} from "../images";
import { Header, Text, PortfolioMockupContainer } from "../Components";
import { THEME_COLORS } from "../constants";

const DevelopmentPortfolio = ({ classes }) => (
  <Fragment>
    <Header />
    <div className={classes.container}>
      <Text accent Tag="h1" className={classes.heading}>
        My Work - Development
      </Text>
      <Text>
        While I do have a Github and occasionally will push some personal
        projects there, the projects I’m most proud of are my freelance work and
        side projects for the companies that employ me full time. This means
        that most of my code is spread across multiple private repositories and
        I do not technically “own” it. If you’d like to learn more about any of
        my experiences or see the nitty-gritty technical stuff,{" "}
        <a href="tel:513-203-1730" className={classes.link}>
          give me a call
        </a>
        . I love geeking out on the stuff I’ve built, so be warned—I’ll go into
        as much detail as you’ll let me.
      </Text>
      <div className={classes.mockUpContainer}>
        <PortfolioMockupContainer
          imageUrl={krogerMockup}
          backgroundColor="#BBD4F1"
          href="https://www.kroger.com/"
        />
        <div className={classes.mockUpContainerTextContainer}>
          <a target="blank" href="https://www.kroger.com/">
            <Text accent className={classes.mockUpContainerHeading}>
              Kroger - Front End Engineer
            </Text>
          </a>
          <Text>
            <i>Technologies: React, Redux, Node.js, CSS</i>
          </Text>
          <Text Tag="ul" className={classes.mockupList}>
            <li>
              Created a lightweight, performant &amp; accessible React carousel
              to contribute to our components team.
            </li>
            <li>
              Helped with a site redesign—including developing an entirely new
              cart and checkout experience
            </li>
            <li>
              Built flexible, composable product display components that allow
              multiple teams to quickly implement new features and easily change
              the way we display products while maintaining consistency across
              the entire site
            </li>
            <li>
              Run accessibility audits and improve the accessibility of the site
            </li>
            <li>
              Implement a custom hosted fields solution for our credit card
              forms{" "}
            </li>
            <li>
              Lead company-wide initiatives through helping integrate with third
              party services and regularly contributing to weekly UI meetings
            </li>
          </Text>
        </div>
      </div>
      <div className={classes.mockUpContainer}>
        <PortfolioMockupContainer
          imageUrl={educatingFromTheGroundUpMockup}
          backgroundColor="#4B604D"
          href="http://www.educatingfromthegroundup.org/"
        />
        <div className={classes.mockUpContainerTextContainer}>
          <a
            target="blank"
            className={classes.mockUpContainerHeading}
            href="http://www.educatingfromthegroundup.org/"
          >
            <Text accent>
              Educating From The Ground Up - Freelance Developer
            </Text>
          </a>
          <Text>
            <i>Technologies: React, Redux, HTML, CSS, AWS</i>
          </Text>
          <Text Tag="ul" className={classes.mockupList}>
            <li>
              Developed and deployed a web app with interactive maps for Miami
              University, OH
            </li>
          </Text>
        </div>
      </div>
      <div className={classes.mockUpContainer}>
        <PortfolioMockupContainer
          imageUrl={blobBandMockup}
          backgroundColor="#474646"
          href="http://blobband.com/"
        />
        <div className={classes.mockUpContainerTextContainer}>
          <a
            target="blank"
            className={classes.mockUpContainerHeading}
            href="http://blobband.com/"
          >
            <Text accent>Blob Band - Designer, Architect, Developer</Text>
          </a>
          <Text>
            <i>
              Technologies: React, Redux, CSS, Lottie (for animations), Scratch
            </i>
          </Text>
          <Text Tag="ul" className={classes.mockupList}>
            <li>
              Senior design project &amp; hour of code to teach 2-4 graders
              basic programming concepts, such as loops
            </li>
            <li>
              Led the team in architecting, developing, and deploying a single
              page web application
            </li>
            <li>
              Forked Scratch 3 GUI and integrated it with a custom workspace
            </li>
            <li>
              Wrote a utility function to parse scratch GUI code and transform
              to Javascript for validation and animations
            </li>
            <li>
              Integrated animations and sound to create an exciting, immersive
              experience for users
            </li>
          </Text>
        </div>
      </div>
      <div className={classes.mockUpContainer}>
        <PortfolioMockupContainer
          imageUrl={madOptimistMockup}
          backgroundColor="#F7A34A"
          href="https://www.themadoptimist.com/"
        />
        <div className={classes.mockUpContainerTextContainer}>
          <a target="blank" href="https://www.themadoptimist.com/">
            <Text accent className={classes.mockUpContainerHeading}>
              The Mad Optimist - Freelance Developer
            </Text>
          </a>
          <Text>
            <i>Technologies: React, Redux, HTML, CSS</i>
          </Text>
          <Text Tag="ul" className={classes.mockupList}>
            <li>Architected and developed 2 complete site redesigns</li>
            <li>
              Developed a custom soap building experience that required working
              extensively with CSS &amp; SVG animations and positioning
            </li>
          </Text>
        </div>
      </div>
      <div className={classes.mockUpContainer}>
        <PortfolioMockupContainer
          imageUrl={washmatesMockup}
          backgroundColor="#4D5B63"
          href="http://www.washmates.com/"
        />
        <div className={classes.mockUpContainerTextContainer}>
          <a target="blank" href="http://www.washmates.com/">
            <Text accent className={classes.mockUpContainerHeading}>
              Washmates - Freelance Developer
            </Text>
          </a>
          <Text>
            <i>
              Technologies: React Native, React, Redux, Node.js, SQL, HTML, CSS,
              AWS
            </i>
          </Text>
          <Text Tag="ul" className={classes.mockupList}>
            <li>
              Architected, developed, and deployed a mobile app for ordering and
              tracking laundry services
            </li>
            <li>
              Created an administrative web dashboard to track and update orders
              in real time
            </li>
            <li>
              Created database and services for placing and updating orders,
              creating accounts, processing payments, and authenticating users
            </li>
          </Text>
        </div>
      </div>
    </div>
  </Fragment>
);

const styles = {
  container: {
    minHeight: "100vh",
    padding: "0 24px",
    paddingBottom: 80,
    "@media (min-width: 1024px)": {
      padding: "0 80px",
      paddingBottom: 80,
    },
  },
  heading: {
    fontSize: 48,
    color: THEME_COLORS.BROWN_ONE,
    margin: "48px auto",
    textAlign: "center",
  },
  link: {
    color: THEME_COLORS.ACCENT_ONE,
    borderBottom: `1px solid ${THEME_COLORS.ACCENT_ONE}`,
  },
  mockUpContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1024px)": {
      flexDirection: "row",
    },
  },
  mockUpContainerHeading: {
    fontSize: 36,
    color: THEME_COLORS.TEXT_DEFAULT,
  },
  mockupList: {
    marginTop: 16,
  },
  mockUpContainerTextContainer: {
    "@media (min-width: 1024px)": {
      marginLeft: 48,
    },
  },
};

export default injectSheet(styles)(DevelopmentPortfolio);
