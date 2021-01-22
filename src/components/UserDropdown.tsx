import React from 'react'
import { Typography, Menu, Avatar, IconButton } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { blue, common } from "@material-ui/core/colors";
import SettingsPower from "@material-ui/icons/SettingsPower";
import VpnKey from "@material-ui/icons/VpnKey";
import ContentFilter from "@material-ui/icons/FilterList";

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
        <SettingsPower />
        <Typography style={{ paddingLeft: "1em" }} variant="inherit">
          Выйти
        </Typography>
      </MenuItem>
      <MenuItem onClick={changePassClick}>
        <VpnKey />
        <Typography style={{ paddingLeft: "1em" }} variant="inherit">
          Профиль
        </Typography>
      </MenuItem>
    </Menu>
  );

interface AppUserMenuProps {
username?: string;
onSignoutClick?: () => void;
onChangePassClick?: () => void;
}

function UserDropdown<AppUserMenuProps>({
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
        <div style={styles.avatarDiv}>
            <Avatar
            src={"https://peopletalk.ru/wp-content/uploads/2017/11/1480331127.jpg?opt=true"}
            style={styles.avatarIcon}
            />
            <span style={styles.avatarSpan}>
            <Typography style={styles.user} variant="inherit">
                {username}
            </Typography>
    
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
            >
                <ContentFilter />
            </IconButton>
            {withMenu({
                anchorEl,
                open,
                signoutClick,
                changePassClick,
                handleClose,
            })}
            </span>
        </div>
    )
}

export default UserDropdown