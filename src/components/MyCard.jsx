import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function ImgMediaCard(/*props*/) {
  //const { classes } = props;
  return (
    <Card className="Card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="media"
          height="160"
          image="https://rawcdn.githack.com/allinux/react-test2/400b6659ceef383a32fe83b02891b58127aae42a/public/images/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            이미지 타이틀
          </Typography>
          <Typography component="p">
            이미지 설명 이미지 카드 컴포넌트
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

//export default withStyles(styles)(ImgMediaCard);
