import React from 'react';
import '../assets/css/home.css';
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Home() {
    const ServiceBox = (props) => {
        return (
            <div>
                <div className="card cardcss" >
                    <div className="card-body">
                        <p className='h1 text-white'>{props.icon}</p>
                        <h5 className="card-title boxtitle">{props.title}</h5>
                        <p className="card-text cardText">
                            {props.text}
                        </p>
                     
                        
                    </div>
                </div>

            </div>
        )
    }
    return (
        <>
            <div className='container-fluid p-0 m-0 custumbg' id='#home'>
                <div className='container-fluid  blackcolor'>
                    <div className='container custumtextstyle'>
                        <p className='cleantext'>clean and creative</p>
                        <p className='experttext'>WE ARE AN EXPERT</p>
                        <p className='helptext'>we can help you to chase your dreams and ideas, and build your company as a multi national product.</p>
                        <button type='button' className='btn btn-primary custombtn'>GET STARTED {<BsArrowRight />}</button>
                    </div>
                </div>
            </div>
            <div className='container mt-3  displayWrap '>
                <ServiceBox icon={<MdOutlineDesignServices />} title="Beautiful Design" text="With supporting text below as a natural lead-in to additional content"  />
                <ServiceBox icon={<MdFeaturedPlayList />} title="Unique Features" text="With supporting text below as a natural lead-in to additional content"  />
                <ServiceBox icon={<MdOutlineSupportAgent />} title="Reliable Support" text="With supporting text below as a natural lead-in to additional content"  />
            </div>
        </>
    )
}
