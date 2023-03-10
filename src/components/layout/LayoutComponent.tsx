import * as React from 'react';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { ROUTES } from "../../routing";

import {
    ExpandLess, ExpandMore,
    Settings as SettingsIcon,
    PeopleAlt as PeopleAltIcon,
    TextSnippet as TextSnippetIcon,
    Inventory as InventoryIcon,
    Person as PersonIcon,
    Wallet as WalletIcon,
    ShoppingBasket as ShoppingBasketIcon
} from "@mui/icons-material";
import SidebarItem from "./SidebarItem";
import { m } from "../../services/i18n";
import { Collapse } from '@mui/material';

const drawerWidth = 330;
const collapsedDrawerWidth = 124;
const collapseSidebarBtnWidth = 66;
const headerHieght = 124;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const CollapseSidebarBtn = styled.button<AppBarProps>` 
    width: ${collapseSidebarBtnWidth}px;
    height: ${collapseSidebarBtnWidth}px;
    border-radius: 50%;
    z-index: 999999;
    position: absolute;
    top: 42%;
    margin-left: ${ (props) => props.open ? (drawerWidth - collapseSidebarBtnWidth/2) : (collapsedDrawerWidth - collapseSidebarBtnWidth/2)}px;
    background-color: #F5F5F5;
    transition: margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    border: 0;
    cursor: pointer;
    color: darkgray;
    &:hover {
        color: #6E33FF;
    }
`

const SidebarHeader = styled(Toolbar)<AppBarProps>`
    height: 150px;
    width: ${ (props) => props.open ? drawerWidth : collapsedDrawerWidth }px;

`

const Main = styled.div<AppBarProps>`
    background-color: #F5F5F5;
    flex-grow: 1;
    padding: 24px;
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`

const DrawerContentBox = styled.div`
    display: flex;
    padding-top: ${headerHieght}px;
    height: 100%;
    width: 100%;
`

const AppBar = styled(MuiAppBar)<AppBarProps>`
    && {
        width: calc(100% - ${ (props) => props.open ? drawerWidth : collapsedDrawerWidth }px);
        margin-left: ${ (props) => props.open ? drawerWidth : collapsedDrawerWidth }px;
        box-shadow: unset;
        height: ${headerHieght}px;
        justify-content: center;
        background-color: #F5F5F5;
        color: #353535;
        transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    }
`

const ListItemButtonStyled = styled(ListItemButton)`
    && {background-color: #E8E8E8;
    &:hover {
        background-color: #E8E8E8;
    }}
    &:hover .iconStyled {
        transition: color 200ms linear;
        color: #6E33FF;
    }}
    &:hover .textStyled {
        transition: color 200ms linear;
        color: #6E33FF;
    }}
`

const Drawer = styled(MuiDrawer)`
    width: ${ (props) => props.open ? drawerWidth : collapsedDrawerWidth }px;
    flex-shrink: 0;
    white-space: nowrap;
    box-sizing: border-box;
    transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    background: #E8E8E8;
    overflow-x: hidden;
    .MuiDrawer-paper {
        transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
        width: ${ (props) => props.open ? drawerWidth : collapsedDrawerWidth }px;
        background: #E8E8E8;
        overflow-x: hidden;
    }
`

export default function MiniDrawer() {
    const [open, setOpen] = React.useState(true);

    const handleDrawerSwitch = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }

    };

    const [openCollapsed, setopenCollapsed] = React.useState(false);

    const handleClick = () => {
        setopenCollapsed(!openCollapsed);
    };

    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh'}}>
                <CssBaseline />
                <AppBar position='fixed' open={open}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            This is header
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <SidebarHeader>
                        TODO: ?????????? ?????? ??????????????
                    </SidebarHeader>
                    <List sx={{ marginLeft: '25px'}}>
                        <SidebarItem to="Finance" icon={WalletIcon} text={open ? m("??????????????") : ''} />
                        <SidebarItem to="Users" icon={PersonIcon} text={open ? m("????????????????????????") : ''} />
                        <SidebarItem to="Stock" icon={InventoryIcon} text={open ? m("??????????") : ''} />
                        <SidebarItem to="Reports" icon={TextSnippetIcon} text={open ? m("????????????") : ''} />

                        <ListItemButtonStyled onClick={handleClick}>
                            <ListItemIcon>
                                <ShoppingBasketIcon className="iconStyled" sx={{ fontSize: '2rem', color: 'darkgray'}} />
                            </ListItemIcon>
                            { open ? <ListItemText className="textStyled" primary="????????????" /> : ''}
                            {open ? (openCollapsed ? <ExpandLess className="iconStyled" sx={{ color: 'darkgray' }}/> : <ExpandMore className="iconStyled" sx={{ color: 'darkgray' }}/>) : ''}
                        </ListItemButtonStyled>
                        { open ?
                        <Collapse in={openCollapsed} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <SidebarItem to="Managers" text={open ? m("??????????????????") : ''} />
                                <SidebarItem to="Florists" text={open ? m("????????????????") : ''} />
                                <SidebarItem to="Logistics" text={open ? m("??????????????") : ''} />
                            </List>
                        </Collapse>
                        : '' }
                        <SidebarItem to="Clients" icon={PeopleAltIcon} text={open ? m("??????????????") : ''} />
                        <SidebarItem to="Settings" icon={SettingsIcon} text={open ? m("??????????????????") : ''} />
                    </List>
                </Drawer>
                <Main open={open} >
                    <DrawerContentBox>
                        <Outlet />
                    </DrawerContentBox>
                </Main>
                <CollapseSidebarBtn
                    open={open}
                    onClick={handleDrawerSwitch}
                >
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </CollapseSidebarBtn>
            </Box>
        </>
    );
}