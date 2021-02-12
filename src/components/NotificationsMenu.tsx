import React from 'react'
import { Menu, IconButton } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { blue, common } from "@material-ui/core/colors";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { ListItemIcon, ListItemText} from "@material-ui/core";
import BellIcon from "../assets/icons/Bell.svg"

const blue600 = blue["900"];
const drawerWidth = 400;

const styles = {
drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(227, 231, 232, 0.63)",
    overflow: "auto",
},
avatarDiv: {
    padding: "15px 0 10px 10px" as TODO,
    width: 250
},
avatarIcon: {
    float: "left" as TODO,
    display: "block" as TODO,
    marginRight: 15,
    boxShadow: "0px 0px 0px 8px rgba(0,0,0,0.2)" as TODO,
},
avatarSpan: {
    paddingTop: 0,
    display: "block",
    color: "purple",
    fontWeight: 400,
    fontSize: 12,
    textShadow: "1px 1px #444",
},
user: {
    fontSize: 14,
    color: common.white,
},
menuItem: {
    color: blue600,
    fontWeight: 500,
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    fontSize: 16,
},
};

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
        Уведомление
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        Уведомление
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        Уведомление
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        Уведомление
      </MenuItem>
    </Menu>
  );

interface NotificationsMenuProps {
username?: string;
onSignoutClick?: () => void;
onChangePassClick?: () => void;
}

function NotificationsMenu<NotificationsMenuProps>({
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
            <div color="inherit" onClick={handleMenu} style={{display: "flex", alignItems: "center"}}>
              <ListItemIcon><img src={BellIcon} /></ListItemIcon>
              <ListItemText primary="Уведомления"/>
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

export default NotificationsMenu