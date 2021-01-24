import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, SliderClassKey, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100vw",
      height: "40vh",
      position: "relative"
    },
    sliderImage: {
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute"
    }
  }),
);

function Slider(props)
{
    var items = [
        {
            name: "Рентген-аппараты",
            description: "Скидка 40% при заказе до 30 января 2021 года!",
            image: "https://ds-med.ru/wp-content/uploads/2020/05/listem-2.jpg"
        },
        {
            name: "Мониторы пациента",
            description: "Скидка 40% при заказе до 30 января 2021 года!",
            image: "https://ds-med.ru/wp-content/uploads/2020/05/votem-2.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <img src={props.item.image} alt="..." className={classes.sliderImage}/>
            <Button type="button" variant="contained" color="primary">
                Создать проект
            </Button>
        </Paper>
    )
}

export default Slider