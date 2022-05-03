import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useIsAuthenticated, useMsal, useAccount } from "@azure/msal-react";
import { loginRequest } from "../src/authConfig";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useEffect } from "react";


const mSSignOut = (instance) => {
    instance.logout()
}

const 

export const SignOutButton = () => {
    const { instance, accounts, inProgress } = useMsal();

    const account = useAccount(accounts[0]) || {};
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = () => {
        setAnchorEl(null);
        instance.logout();
    }

    console.log(account);

    return (
        <div>
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
            >
                <AccountCircle />
                <span>{account.name}</span>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    )
};