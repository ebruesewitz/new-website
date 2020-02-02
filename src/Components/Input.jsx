import React from "react";
import injectSheet from "react-jss";
import { THEME_COLORS } from "../constants";

const InputWithClasses = ({
  classes,
  autoFocus,
  className,
  placeholder,
  isTextArea,
  type,
  hasError,
  onChange,
  value,
}) => (
  <div>
    {hasError && (
      <p className={classes.inputRequired}>{placeholder} is required</p>
    )}
    {isTextArea ? (
      <textarea
        className={[classes.input, classes.textArea, className].join(" ")}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    ) : (
      <input
        autoFocus={autoFocus}
        className={[classes.input, className].join(" ")}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    )}
  </div>
);

const styles = {
  input: {
    height: 52,
    width: 400,
    border: `1px solid ${THEME_COLORS.BROWN_THREE}`,
    fontFamily: "montserrat",
    fontSize: 16,
    outline: "none",
    padding: 15,
    boxSizing: "border-box",
    "&:focus": {
      border: `1px solid ${THEME_COLORS.ACCENT_TWO}`,
    },
    "&::placeholder": {
      color: THEME_COLORS.BROWN_THREE,
      fontFamily: "montserrat",
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: 16,
    },
  },
  textArea: {
    height: 150,
  },
  inputRequired: {
    color: THEME_COLORS.ACCENT_FOUR,
    fontSize: 12,
    textTransform: "uppercase",
  },
};

export default injectSheet(styles)(InputWithClasses);
