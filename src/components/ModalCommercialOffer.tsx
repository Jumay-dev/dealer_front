import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DataTable from "./DataTable"
import {Link} from 'react-router-dom';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function CommercialOffer() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Управление КП для клиента</h2>
      <p id="simple-modal-description">
        <DataTable 
        headers={["Название", "Создано", "Актуально до"]}
        rows={[
          {
            name: 1,
            cells: ['КП №28736837', '21.01.2021', '30.02.2021'],
          },
          {
            name: 2,
            cells: ['КП №28736823', '21.01.2021', '30.02.2021'],
          },
          {
            name: 3,
            cells: ['КП №28723188', '21.01.2021', '30.02.2021'],
          }
        ]}
        actions={['delete', 'download']}
        />
      </p>
      <Link to="/newoffer">
        <Button type="button" variant="contained" color="primary">
          Сформировать новое КП
        </Button>
      </Link>
    </div>
  );

  return (
    <>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">
        КП клиенту
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}
