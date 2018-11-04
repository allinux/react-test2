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
          height="180"
          image="http://postfiles7.naver.net/MjAxNzAzMTlfMjU2/MDAxNDg5ODc4OTA0NzYy.gzqEQaijFE-G0yGCbk2S7n1iHAUJ-ygUcGUQBbKUbfkg.lntRahc92R3tOQ0qp5Jj-5v8FF59u4Ywoy0vNtCRAogg.PNG.yoray123/%EA%B3%A0%EC%96%91%EC%9D%B4.png?type=w2"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            이미지 타이틀1
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
