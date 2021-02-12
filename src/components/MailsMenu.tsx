import React from 'react'
import { Typography, Menu, Avatar, IconButton } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { blue, common } from "@material-ui/core/colors";
// import MailIcon from '@material-ui/icons/MailOutline';
import Badge from '@material-ui/core/Badge';
import { ListItemIcon, ListItemText} from "@material-ui/core";
import MailIcon from "../assets/icons/Email.svg"

const blue600 = blue["900"];
const drawerWidth = 400;

const withMenu = ({
    anchorEl,
    open,
    signoutClick,
    changePassClick,
    handleClose,
  }) => (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={signoutClick}>
        Почта
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        Почта
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        Почта
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        Почта
      </MenuItem>
    </Menu>
  );

interface MailsMenuProps {
    username?: string;
    onSignoutClick?: () => void;
    onChangePassClick?: () => void;
}

function MailsMenu<MailsMenuProps>({
    username = 'Даэсмедов Михаил',
    onSignoutClick = () => console.log('signout'),
    onChangePassClick = () => console.log('signin'),
}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const signoutClick = (event: React.ChangeEvent<unknown>) => {
      event.preventDefault();
      onSignoutClick();
    };
  
    const changePassClick = (event: React.ChangeEvent<unknown>) => {
      event.preventDefault();
      onChangePassClick();
      handleClose()
    };
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      console.log('click')
    };
    return (
        <div>
            <div onClick={handleMenu} style={{display: "flex", alignItems: "center"}}>
              <ListItemIcon><img src={MailIcon} /></ListItemIcon>
              <ListItemText primary="Сообщения"/>
            </div>
            {withMenu({
                anchorEl,
                open,
                signoutClick,
                changePassClick,
                handleClose,
            })}
        </div>
    )
}

export default MailsMenu