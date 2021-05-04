import { Button, Grid, Typography } from "@material-ui/core";
import { ProductStyle } from "./Product.style";
import { ProductData } from "./ProductInterface";

interface Props {
  product: ProductData;
}

export const ProductCard = ({ product }: Props) => {
  const classes = ProductStyle();

  return (
    <Grid
      item
      sm={4}
      xs={6}
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.productContainer}
    >
      <Grid item xs>
        <Button className={classes.image}>
          <img className={classes.img} alt="complex" src={product.images[0]} />
        </Button>
      </Grid>
      <Grid item xs>
        <Typography className={classes.titleText}>{product.title}</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">From ${product.price}</Typography>
      </Grid>
      <Grid item xs>
        <Button className={classes.cartButton}>Add to Cart</Button>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
