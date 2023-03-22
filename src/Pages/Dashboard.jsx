import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Categories from '../TempComponents/Categories'
import { getPostsParam } from '../firebase/routes'
import classnames from "classnames";
import MainNavbar from "./components/Navbar/MainNavbar"
import Content from "./components/Content/Content"



export default function Dashboard() {
    const [current, setCurrent] = useState({})
    
    useEffect(()=> {
        
    }, [])
    
    
        return (
            <>
                <MainNavbar />
                <Content />
                
                
            </>
        );
    }
