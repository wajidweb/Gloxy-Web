import React from 'react';
import '../assets/css/services.css';
import serviceimage from '../assets/images/service.png';
import {MdOutlineDesignServices} from 'react-icons/md'
import design from '../assets/images/web.png';
import ecommerce from '../assets/images/ecommerce.png';
import mobile from '../assets/images/mobile.png';
import seo from '../assets/images/seo.png';

export default function Services() {
    const Box = (props)=>{
        return (
            <div className="card mb-3 cardwidth">
            <div className='container imagediv'>
            <img src={props.image} className="card-img-top img-fluid" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center serText">{props.title}</h5>
          
            </div>
          </div>
          
        )
    }

  return (
   <>
    <div className='container-fluid p-0 m-0 mb-3 servicesbg' id='services'>
        <p className='serImage '>{<MdOutlineDesignServices />}</p>
        <p className='servicestext'>Services</p>
        <p className='desingtext'>DESIGN YOUR SUCCESS AROUND YOUR TALENT.<br /> WE BRING PROMISING IDEAS TO LIFE ONLINE. </p>
        
    </div>
    <div className='container  disWrapstyle bg-light mb-3 '>
        <Box image={design} title="Website Design And Development"/>
        <Box image={ecommerce} title="E-commerce Website Design "/>
        <Box image={mobile} title="Mobile App Development"/>
        <Box image={seo} title="seo and internet marketing"/>
    </div>
   </>
  )
}
