import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect, useLayoutEffect } from "react";

export default function ScrollTop()
{
    const {pathname}=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
  
    return null;
}