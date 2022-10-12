import React from 'react';
import '../assets/css/login.css'

export default function Login() {
  return (
    <div className='container-fluid  m-0 logincontainer ' id='login'>
      <div className='container'>
        <p className='h2 text-light'>Learn how people are <br /> starting successful businesses.</p>
        <p className='h4 text-center growcss'>grow your business with <span>2,258 and growing </span> founder case studies.</p>


        <div className='container'>
          <div className='innerContainer'>
            <form>
              <div className="mb-3 displayprop ">
              
                <input
                style={{maxWidth:"600px"}}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder='Enter Your Email ...'
                  aria-describedby="emailHelp"
                />
                <div>
                  <button type='button' className='btn btn-primary ms-1 loginbtn'>Login ! </button>
                </div>
              </div>
            </form>

          </div>
        </div>




      </div>
    </div>
  )
}
