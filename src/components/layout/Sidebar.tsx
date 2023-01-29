import React, { FC } from "react";
import { Link } from "react-router-dom"
import { ROUTES } from "../../constants";
import WalletIcon from '@mui/icons-material/Wallet';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

//TODO: реализовать компонент SidebarItem
const Sidebar:FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: "300px",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "300px",
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: "gray"
                }
            }}
        >
            <List>
                <Toolbar>
                    TODO: место под логотип
                </Toolbar>
                <ListItemButton
                    component={Link}
                    to={ROUTES.Finance}
                >
                    <ListItemIcon>
                        <WalletIcon />
                    </ListItemIcon>
                    <ListItemText primary="Финансы" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to={ROUTES.Users}
                >
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Пользователи" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to={ROUTES.Stock}
                >
                    <ListItemIcon>
                        <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Склад" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to={ROUTES.Reports}
                >
                    <ListItemIcon>
                        <TextSnippetIcon />
                    </ListItemIcon>
                    <ListItemText primary="Отчеты" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Заказы" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            component={Link}
                            to={ROUTES.Managers}
                            sx={{ pl: 4 }}
                        >
                            <ListItemText primary="Менеджеры" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to={ROUTES.Florists}
                            sx={{ pl: 4 }}
                        >
                            <ListItemText primary="Флористы" />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to={ROUTES.Logistics}
                            sx={{ pl: 4 }}
                        >
                            <ListItemText primary="Логисты" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                    component={Link}
                    to={ROUTES.Clients}
                >
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Клиенты" />
                </ListItemButton>
                <ListItemButton
                    component={Link}
                    to={ROUTES.Settings}
                >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Настройки" />
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default Sidebar