
import { Box } from "@mui/material"
import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"
import Sidebar from "./Sidebar"

const SidebarBox = styled(Box)(({ theme }) => ({
    width: "330px",
    flexShrink: 0,
    backgroundColor: "black ",
}))

const MainBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    paddingTop: 30,
    width: "calc(100% - 330px)",
    minHeight: "100vh",
    backgroundColor: "#F7F7F7"
}))

const LayoutComponent: FC = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <SidebarBox>
                <Sidebar />
            </SidebarBox>
            <MainBox component="main">
                <Outlet />
            </MainBox >
        </Box>
    )
}

export default LayoutComponent