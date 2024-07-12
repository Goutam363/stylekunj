import "./Category.css";
import { Grid, Container } from "@mui/material";

export default function Category() {
  return (
    <Container maxWidth="xl" className="category">
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className="category-item ch-400">
            <img src="img/category-3.jpg" alt="Category Image" />
            <a className="category-name" href="">
              <p>Some text goes here that describes the image</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="category-item ch-250">
            <img src="img/category-4.jpg" alt="Category Image" />
            <a className="category-name" href="">
              <p>Some text goes here that describes the image</p>
            </a>
          </div>
          <div className="category-item ch-150">
            <img src="img/category-5.jpg" alt="Category Image" />
            <a className="category-name" href="">
              <p>Some text goes here that describes the image</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="category-item ch-150">
            <img src="img/category-6.jpg" alt="Category Image" />
            <a className="category-name" href="">
              <p>Some text goes here that describes the image</p>
            </a>
          </div>
          <div className="category-item ch-250">
            <img src="img/category-7.jpg" alt="Category Image" />
            <a className="category-name" href="">
              <p>Some text goes here that describes the image</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="category-item ch-400">
            <img src="img/category-8.jpg" alt="Category Image" />
            <a className="category-name" href="">
              <p>Some text goes here that describes the image</p>
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
