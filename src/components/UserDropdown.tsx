import React from 'react'
import { Typography, Menu, Avatar, IconButton } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { blue, common } from "@material-ui/core/colors";
import SettingsPower from "@material-ui/icons/SettingsPower";
import VpnKey from "@material-ui/icons/VpnKey";
import ContentFilter from "@material-ui/icons/FilterList";
import { Link } from 'react-router-dom'

import { connect } from "react-redux";
import { thunkAuth } from "../services/thunks";
import { SIGN_OUT } from "../store/types";

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
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
},
avatarIcon: {
    float: "left" as TODO,
    display: "block" as TODO,
    marginRight: 15,
    boxShadow: "0px 0px 0px 3px rgba(0,0,0,0.2)" as TODO,
},
avatarSpan: {
    paddingTop: 0,
    color: "purple",
    fontWeight: 400,
    fontSize: 12,
},
user: {
    fontSize: 14,
    color: common.black,
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
      <MenuItem>
        <Link to="/user">
            <VpnKey />
            <Typography style={{ paddingLeft: "1em" }} variant="inherit">
                Профиль
            </Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/Company">
            <VpnKey />
            <Typography style={{ paddingLeft: "1em" }} variant="inherit">
                Страница организации
            </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={signoutClick}>
        <SettingsPower />
        <Typography style={{ paddingLeft: "1em" }} variant="inherit" >
          Выйти
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
    user,
    signOutUser,
    getUser,
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  let signOutAction = {
    type: SIGN_OUT,
    endpoint: "logout/",
    data: {},
  };
  
  const signoutClick = (event: React.ChangeEvent<unknown>) => {
    event.preventDefault();
    console.log('logout UserDropdown')
    signOutUser(signOutAction);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log('click')
  };
  return (
    <div style={styles.avatarDiv}>
      <span style={{
        display: "flex",
        alignItems: "center"
      }}>
        <Avatar
        src={"https://peopletalk.ru/wp-content/uploads/2017/11/1480331127.jpg?opt=true"}
        style={styles.avatarIcon}
        />
        <Typography style={styles.user} variant="inherit">
          {user !== undefined ? user.firstname : null}
        </Typography>
      </span>
      <span style={styles.avatarSpan}>

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
          handleClose,
        })}
      </span>
    </div>
  )
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, user } = auth

  return {
    isAuthenticated,
    user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signInUser: (action: TODO) => dispatch(thunkAuth(action)),
    signOutUser: (action: TODO) => dispatch(thunkAuth(action)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown)