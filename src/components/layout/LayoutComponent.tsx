
import { Box } from "@mui/material"
import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const LayoutComponent: FC = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <Box 
                sx={{
                    width: "300px",
                    flexShrink: 0,
                    backgroundColor: "black ",
                }}
            >
                <Sidebar />
            </Box>
            <Box 
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: "calc(100% - 300px)",
                    minHeight: "100vh",
                    backgroundColor: "darkgray"
                }}
            >
                <Outlet />
            </Box>
        </Box>
    )
}

export default LayoutComponent