import { Inventory as InventoryIcon, SvgIconComponent } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routing'

type SidebarItemProps = {
  to: keyof typeof ROUTES,
  text: string,
  icon?: SvgIconComponent
}

const SidebarItem: FC<SidebarItemProps> = (props: SidebarItemProps) => {
  const Icon = props.icon
  return (
    <ListItemButton
        component={Link}
        to={props.to}
    >
        <ListItemIcon>
            {Icon ? <Icon /> : null}
        </ListItemIcon>
        <ListItemText primary={props.text} sx={{ color: "#353535", fontSize: '1.25rem' }} />
    </ListItemButton>
  )
}

export default SidebarItem