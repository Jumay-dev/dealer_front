import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ModalCompanyInfo from '../components/ModalCompanyInfo'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block",
    margin: 10
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        //   height="140"
          width="100%"
          image="https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ААА
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ИНН 7802589471
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Адрес 197110, Россия, САНКТ-ПЕТЕРБУРГ, МАРТЫНОВА, ДОМ 4, ЛИТЕРА А, ПОМЕЩЕНИЕ 2Н ОФИС1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Сокращенное наименование организации ООО "ГРАНД МЕДИКАЛ"
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Отв. лицо: Беззубенков Иван Геннадьевич
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalCompanyInfo />
        <Button size="small" color="primary">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}