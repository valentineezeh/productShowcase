import { makeStyles } from "@material-ui/core/styles";

export const ProductStyle = makeStyles((theme) => ({
  root: {
    // margin: "auto",
    width: "100%",
    height: "100%",
    background: "#e3e6e3",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "128px",
    height: "128px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cartButton: {
    textTransform: "none",
    background: "#51594f !important",
    height: 50,
    padding: "0 30px",
    borderRadius: 0,
    color: "#ffff",
    marginTop: theme.spacing(2),
  },
  titleText: {
    fontFamily: "Karla",
    fontSize: 16,
    fontStyle: "bold",
  },
  productContainer: {
    marginTop: 50,
  },
  errorAlert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
