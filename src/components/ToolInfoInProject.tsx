import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
  }),
);

function ToolInfoInProject(
    {
        toolName, 
        img, 
        description,
        openPop,
        anchorEl,
        handleClose,
        id
    }) {
    const classes = useStyles();

    return (
        <Popover
        id={id}
        open={openPop}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        >
            <Card style={{maxWidth: "20vw"}}>
                <CardHeader
                    title={toolName}
                    subheader="10 000 $ в рознице"
                />
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Popover>

    );
}

export default ToolInfoInProject