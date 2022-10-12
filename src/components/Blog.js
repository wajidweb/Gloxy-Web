import React from 'react';
import BlogData from './BlogData';

export default function Blog() {
    const Blogbox = (props) => {
        return (
            <div className='container  'style={{ width: "25rem", marginBottom: 20}}>

                <div className="card" >
                    <img src={props.blogimage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text cardTitle">
                           {props.title}
                        </p>
                        
                        <p className='description'>{props.description}</p>
                    </div>

                    <div className='container lastdiv mb-3'>
                        <div className="profilediv">
                            <img src={props.profile} alt="" />
                            
                        </div>
                        <div className='container-fluid authordiv '>
                                <p className='same'>{props.author}</p>
                                <p className='same'>{props.date}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (
        <div className='container-fluid p-0 m-0 mb-5' id="blog">
            <div className='container'>
                <p className='text-center h2 mt-5  mb-5'>BLOGS</p>
                <div className='container blogscontainer'>
                    {
                       BlogData.map((val, ind)=>
                        <Blogbox blogimage={val.blogImage} title={val.title} description={val.description} profile={val.profileImage} author={val.author} date={val.data} />
                       )
                        
                    }
                </div>
                
            </div>
        </div>
    )
}
