import Logo from "../assets/images/icon.png";
import styles from "../css/login.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useInput from "../utils/hooks/useInput";
import Input from "./Input";
import SnackBar from "./SnackBar";
import useSnackBar from "../utils/hooks/useSnackBar";

function validateText(text) {
  const isValid = !!String(text)?.trim();
  return isValid;
}

function LoginForm() {
  const { open, showSnackBar, hideSnackBar, snackBarProps } = useSnackBar();
  const {
    value: userId,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHandler,
    formStateChangeHandler: userIdInvalidHandler,
  } = useInput("", validateText);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    formStateChangeHandler: passwordInvalidHandler,
  } = useInput("", validateText);

  let formIsValid = false;

  if (userIdIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const inValidFormSubmitHandler = () => {
    userIdInvalidHandler();
    passwordInvalidHandler();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      showSnackBar({
        type: "error",
        message: "Please Input all the required fields",
      });

      inValidFormSubmitHandler();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      userId: data.get("userId"),
      password: data.get("password"),
    });
  };
  return (
    <Box className={styles["inner-container"]}>
      <Avatar alt="EduNexus Logo" src={Logo} className={styles.logo} />
      <Typography component="h1" variant="h5">
        Sign in to EduNexus
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        className={styles["form-container"]}
      >
        <Input
          label={"User Id"}
          name={"userId"}
          id={"userId"}
          value={userId}
          onInputChangeHandler={userIdChangeHandler}
          onBlurHandler={userIdBlurHandler}
          hasError={userIdHasError}
        />

        <Input
          label={"Passwod"}
          type="password"
          name={"password"}
          id={"password"}
          value={password}
          onInputChangeHandler={passwordChangeHandler}
          onBlurHandler={passwordBlurHandler}
          hasError={passwordHasError}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={styles.btn}
        >
          Sign In
        </Button>
      </Box>
      <SnackBar
        open={open}
        handleClose={hideSnackBar}
        type={snackBarProps.type}
        message={snackBarProps.message}
      />
    </Box>
  );
}

export default LoginForm;