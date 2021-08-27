import React,{useState,lazy,Suspense} from 'react'
import Blog from '../../Components/Blog/Blog';
import BlogCard1 from '../../Components/BlogCard1/BlogCard1';
import BlogCard2 from '../../Components/BlogCard2/BlogCard2';
import BrandAdvertisement from '../../Components/BrandAdvertisement/BrandAdvertisement';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
import Productivity from '../../Components/Productivity/Productivity';
import Sidebar from "../../Components/Sidebar/Sidebar";
// import Team from '../../Components/Team/Team';
import "./Website.css";

const Team=lazy(()=> import("../../Components/Team/Team"));

function Website() {
    const[isOpen,setOpen]=useState(false);
    return (
        <div>
            <Header isOpen={isOpen} setOpen={setOpen} />
            <hr className="header-line" />
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>
            <Home/>
            <BrandAdvertisement/>
            <Productivity/>
            <Features/>

            <Suspense fallback={<div>Loading....</div>}>
            <Team/>
            </Suspense>

            <Blog/>
            <Footer/>
        </div>
    )
}

export default Website
