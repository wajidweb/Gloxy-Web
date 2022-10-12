import React from 'react';
import "../assets/css/footer.css";
import { MdAddIcCall } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='container-fluid footerOuter'>
            <div className=" container changerow ">

                <div className=" p-1 ">
                    <p className='h5'>About us</p>
                    <p className='textwrap'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vero quia doloribus natus. Dolorum laborum voluptas exercitationem voluptate nisi quod corporis animi, doloremque voluptatem neque quo totam et asperiores esse.</p>
                    <p className='h5'>Contact Us</p>

                    <div className='contbox'>
                        <p className='me-2'>{<MdAddIcCall />}</p>
                        <p>+92-3481970849</p>
                    </div>

                    <div className='contbox'>
                        <p className='me-2'>{<IoMdMail />}</p>
                        <p>mrwajidalikhan42111@gmail.com</p>

                    </div>
                </div>

                <div className=" p-1">
                    <p className='h5'>Our Services</p>
                    <p className='textwrap'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet vero quia doloribus natus. Dolorum laborum voluptas exercitationem voluptate nisi quod corporis animi, doloremque voluptatem neque quo totam et asperiores esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad iure nam non fugiat accusantium at possimus, excepturi autem, voluptas officia mollitia quae earum repudiandae eos nulla ipsa voluptate aliquam!</p>



                </div>

                <div className=" p-1 ">
                    <div className='container-fluid'>
                        <p className='h5'>Subscribe Us </p>
                        <div>
                            <form>
                                <div className="mb-3">
                                   
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder='Enter Email Address ...'
                                       
                                    />

                                </div>

                                <div class="d-grid gap-2 mb-5">
                                   
                                    <button class="btn btn-warning" type="button">SEND</button>
                                </div>
                            </form>

                        </div>
                        <div className="container socialBox">
                            <div>
                                {<FaFacebookF />}
                            </div>
                            <div>
                                {<FaInstagram />}
                            </div>
                            <div>
                                {<FaLinkedinIn />}
                            </div>
                            <div>
                                {<FaTwitter />}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
