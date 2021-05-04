import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Loader from "react-loader-spinner";

import { ProductStyle } from "./Product.style";
import { fetchProducts } from "./ProductSlice";
import { RootState } from "../../store/store";
import { ProductCard } from "./ProductCard";

const Product = () => {
  const classes = ProductStyle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div className={classes.root}>
      <Grid container>
        {error && (
          <div className={classes.errorAlert}>
            <Alert severity="error">{error}</Alert>
          </div>
        )}
        {isLoading ? (
          <Grid container justify="center">
            <Loader type="Circles" color="#51594f" height={50} width={50} />
          </Grid>
        ) : products?.length === 0 ? (
          <Grid container justify="center">
            <Typography className={classes.titleText}>
              Product is yet to be added
            </Typography>
          </Grid>
        ) : (
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Grid>
    </div>
  );
};

export default Product;
