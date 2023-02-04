import { Inventory as InventoryIcon, SvgIconComponent } from '@mui/icons-material'
import { Button, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../../routing'

type SidebarItemProps = {
  to: keyof typeof ROUTES,
  text?: string,
  icon?: SvgIconComponent
}

const SidebarItemStyled = styled(Link)`
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

const SidebarItem: FC<SidebarItemProps> = (props: SidebarItemProps) => {
  const Icon = props.icon
  return (
    <ListItemButton
        component={SidebarItemStyled}
        to={props.to}
    >
        <ListItemIcon>
            {Icon ? <Icon className="iconStyled" sx={{ fontSize: '2rem', color: 'darkgray'}}/> : null}
        </ListItemIcon>
        <ListItemText className="textStyled" primary={props.text} sx={{ color: "#353535", fontSize: '1.25rem' }} />
    </ListItemButton>
  )
}

export default SidebarItem