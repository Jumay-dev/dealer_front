import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DateTable from './DataTable'

function getModalStyle() {
  const top = 50;
  const left = 50;

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
      minWidth: '60vw',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function ModalCommercialOfferPresend({addedTools}) {
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

  console.log(addedTools)

  function rowsForDataTableMaker(tools) {
    let reducedRows = []
    console.log(tools)
    if (tools.length !== 0) {
        tools.forEach( tool => {
            reducedRows.push({
                name: tool.id,
                cells: [tool.name, tool.clientPrice, tool.count, tool.clientDiscount, tool.clientPrice*tool.count]
            })
        })
    }
    return reducedRows
  }

  return (
    <>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">
        Просмотреть КП
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">КП для клиента</h2>
            <DateTable 
                headers={['Название позиции', 'Цена', "Количество", "Скидка", "Сумма"]}
                rows={rowsForDataTableMaker(addedTools)}
                actions={[]}
            />
          <Button type="button" variant="contained" color="primary">
            Отправить на формирование
          </Button>
        </div>
      </Modal>
    </>
  );
}
