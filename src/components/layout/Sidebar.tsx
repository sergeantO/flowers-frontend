import React, { FC } from "react";
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

import { Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { m } from "../../services/i18n";
import styled from "styled-components";

const SidebarWidth = 330
const CollapseSidebarWidth = 66

const CollapseSidebarBtn = styled.div` 
    width: ${CollapseSidebarWidth}px;
    height: ${CollapseSidebarWidth}px;
    border-radius: 50%;
    position: absolute;
    left: ${SidebarWidth-CollapseSidebarWidth/2}px;
    top: 42%;
    background: #F7F7F7;
    z-index: -9;
`

//TODO: реализовать компонент SidebarItem
const Sidebar: FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: `${SidebarWidth}px`,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    paddingLeft: '50px',
                    width: `${SidebarWidth}px`,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: "#E8E8E8"
                }
            }}
        >
            <CollapseSidebarBtn />
            <List>
                <Toolbar sx={{ height: "150px" }}>
                    TODO: место под логотип
                </Toolbar>
                <SidebarItem to="Finance" icon={WalletIcon} text={m("Финансы")} />
                <SidebarItem to="Users" icon={PersonIcon} text={m("Пользователи")} />
                <SidebarItem to="Stock" icon={InventoryIcon} text={m("Склад")} />
                <SidebarItem to="Reports" icon={TextSnippetIcon} text={m("Отчеты")} />
                
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

                <SidebarItem to="Clients" icon={PeopleAltIcon} text={m("Клиенты")} />
                <SidebarItem to="Settings" icon={SettingsIcon} text={m("Настройки")} />
            </List>
        </Drawer>
    )
}

export default Sidebar