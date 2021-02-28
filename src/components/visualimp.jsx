import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Modal,
    Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';


function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const VisBut = ({text, color, callb, size, textcol}) => {
    return(
        <Button 
            style={{ backgroundColor: color, color: textcol }}
            variant="outlined"
            onClick={callb}
            size={size}
        >
            {text}
        </Button>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    icbutton: {
        color: "#ffffff"
    }
  }),
);

export default function SimpleModal() {
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
      <h2 id="simple-modal-title">Версия для слабовидящих</h2>
      Размер:
        <VisBut text="A" size="small" color="#000000" textcol="#ffffff" />
        <VisBut text="A" />
        <VisBut text="A" size="large" />
         
    </div>
  );

  return (
    <div>
      <Button className={classes.icbutton} onClick={handleOpen}>
        <VisibilityIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
