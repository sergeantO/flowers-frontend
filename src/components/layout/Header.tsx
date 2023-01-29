import { AppBar } from "@mui/material";
import React, { FC } from "react";
import styled from "styled-components";


const Header:FC = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: "calc(100% - 330px)",
                ml: "330px",
                height: "150px",
                boxShadow: "unset",
                backgroundColor: "#F5F5F5",
                color: "black" 
            }}
        >

            Это хедер
        </AppBar>
    )
}

export default Header