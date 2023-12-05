import React from 'react'
import '../../css/home/home.css';
import { FaFacebookF } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export const Home: React.FC = () => {

let ScrollControl = (scrollIndex: number): void => {
    window.scrollBy(0,scrollIndex);
}

        return (
            <>
            <div className="hm-ctn">
                <div className="hm-layer"></div>
                <div className="hm-nav">
                    <div onClick={()=>ScrollControl(700)} className="hm-n white trans bcu titF-16">Birds</div>
                </div>
                <img src={require('../../image/Dee_zigns.jpg')} alt="" className="hm-img pic" />
                <div className="hm-div center-abs">
                <div className="hm-title white titF-42 lg-f">Wingingfowl</div>
                    <div className='titF-20 white hm-txt lg-f'>Every species are interesting.One of a flying species with colorful wings,<span className='main titF-20'>Birds</span> are magical!</div>
                    <button onClick={()=>ScrollControl(700)} className="typ-btn trans bcu">EXPLORE MORE</button>
                </div>
                <div className="hm-icn-ctn">
                <a href='https://www.facebook.com/bin.birdsinnature'>
                    <FaFacebookF className='trans bcu icn'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100064810986327'>
                    <MdGroups className='trans bcu icn'/>
                    </a>
                <a href='https://raw.githubusercontent.com/sannlynnhtun-coding/Birds/main/Birds.json'>
                <FiGithub className='trans bcu icn'/>
                </a>
                </div>
            </div>
            </>
        );
}