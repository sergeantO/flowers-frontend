import * as React from 'react';
import { styled as style, useTheme, Theme, CSSObject } from '@mui/material/styles';
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
const CollapseSidebarBtnWidth = 66

const CollapseSidebarBtn = styled.button` 
    width: ${CollapseSidebarBtnWidth}px;
    height: ${CollapseSidebarBtnWidth}px;
    border-radius: 50%;
    z-index: 999999;
    position: absolute;
    top: 42%;
    margin-left: -58px;
    background-color: #F5F5F5;
    border: 0;
    cursor: pointer;
`

const Main = style('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    background: '#E8E8E8',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#E8E8E8',
    overflowX: 'hidden',
    width: `calc(${theme.spacing(15.5)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(15.5)} + 1px)`,
    },
});

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const DrawerHeader = style('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = style(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    width: `calc(100% - 124px)`,
    boxShadow: "unset",
    backgroundColor: "#F5F5F5",
    color: "black",
    transition: theme.transitions.create(['width', 'margin'], {
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        }),
    }),
}));

const Drawer = style(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
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
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            This is header
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <List sx={{ marginLeft: '25px'}}>
                        <Toolbar sx={{ height: "150px" }}>
                            TODO: место под логотип
                        </Toolbar>
                        <SidebarItem to="Finance" icon={WalletIcon} text={open ? m("Финансы") : ''} />
                        <SidebarItem to="Users" icon={PersonIcon} text={open ? m("Пользователи") : ''} />
                        <SidebarItem to="Stock" icon={InventoryIcon} text={open ? m("Склад") : ''} />
                        <SidebarItem to="Reports" icon={TextSnippetIcon} text={open ? m("Отчеты") : ''} />

                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <ShoppingBasketIcon sx={{ fontSize: '2rem'}} />
                            </ListItemIcon>
                            { open ? <ListItemText primary="Заказы" /> : ''}
                            {open ? (openCollapsed ? <ExpandLess /> : <ExpandMore />) : ''}
                        </ListItemButton>
                        { open ?
                        <Collapse in={openCollapsed} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={ROUTES.Managers}
                                    sx={{ pl: 4, minHeight: '48px' }}
                                >
                                    { open ? <ListItemText primary="Менеджеры" /> : ''}
                                </ListItemButton>
                                <ListItemButton
                                    component={Link}
                                    to={ROUTES.Florists}
                                    sx={{ pl: 4, minHeight: '48px' }}
                                >
                                    { open ? <ListItemText primary="Флористы" /> : ''}
                                </ListItemButton>
                                <ListItemButton
                                    component={Link}
                                    to={ROUTES.Logistics}
                                    sx={{ pl: 4, minHeight: '48px' }}
                                >
                                    { open ? <ListItemText primary="Логисты" /> : ''}
                                </ListItemButton>
                            </List>
                        </Collapse>
                        : '' }
                        <SidebarItem to="Clients" icon={PeopleAltIcon} text={open ? m("Клиенты") : ''} />
                        <SidebarItem to="Settings" icon={SettingsIcon} text={open ? m("Настройки") : ''} />
                    </List>
                </Drawer>
                <Main 
                    open={open} 
                    sx={{
                        backgroundColor: "#F5F5F5",
                    }}
                >
                    <CollapseSidebarBtn
                        onClick={handleDrawerSwitch}
                    >
                        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </CollapseSidebarBtn>
                    <DrawerHeader />
                    <Outlet />
                </Main>
            </Box>
        </>
    );
}