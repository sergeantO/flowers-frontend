import { AppBar } from "@mui/material";
import React, { FC } from "react";
import styled from "styled-components";


const Header:FC = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: "calc(100% - 300px)",
                ml: "300px",
                boxShadow: "unset",
                backgroundColor: "white",
                color: "black" 
            }}
        >

            Это хедер
        </AppBar>
    )
}

export default Header