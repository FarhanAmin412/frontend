import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { getArticles } from "../services";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const [articles, setArticles] = useState([]);

  const mountEffect = async () => {
    try {
      const response = await getArticles();
      if (response.status === 200) {
        setArticles(response.data);
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  useEffect(() => {
    mountEffect();
  }, []);
  return (
    <Stack
      spacing={2}
      direction={"column"}
      width={"80%"}
      margin={"10%"}
      flexWrap={"wrap"}
    >
      <Paper elevation={4} sx={{ padding: "60px" }}>
        <Grid container rowSpacing={4} columnSpacing={4}>
          {articles.map((article, index) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{ minHeight: "360px " }}>
                  <CardMedia
                    component={"img"}
                    height={article.image.height}
                    image={article.image.url}
                    alt={article.image.caption}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component={"p"}
                      textAlign={"center"}
                      gutterBottom
                    >
                      {article.title.length > 15
                        ? article.title.slice(0, 15)
                        : article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"p"}
                      textAlign={"justify"}
                    >
                      {article.abstract.length > 50
                        ? article.abstract.slice(0, 50)
                        : article.abstract}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                      position: "relative",
                      bottom: "5%",
                    }}
                  >
                    <Link to={article.url} style={{ textDecoration: "none" }}>
                      <Button
                        sx={{ padding: "11px 36px" }}
                        variant="contained"
                        disableFocusRipple
                      >
                        Visit
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Stack>
  );
};
