import React from 'react';
import '../assets/css/team.css';
import wajid from '../assets/images/IMG_E2328.JPG';
import {BsPlusLg} from 'react-icons/bs';
import TeamData from './TeamData';


export default function Team() {
   
    const Team = (props)=>{
        return (
            <div className='container teamout'>
                <div className='container teaminn'>
                    <p className='rank'>{props.rank}</p>
                    <div className='imagediv'>
                        <img src={props.profile} alt="team member image" className='img-fluid proimage' />
                    </div>
                    <div className='namePlusdiv'>
                        <p className='teamname'>{props.name}</p>
                        <div className='btndiv'>
                        <button type="button" class="btn btn-primary plusBtn">{<BsPlusLg />}</button>

                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
  return (
    <div className='container-fluid p-0 pt-3 pb-3 teamContainer' id='team'>
        <div className="container dis pt-3 ">
            {/* <p className='line'></p> */}
            <p className='h2 meet'>MEET OUR TEAM</p>

        <div className="container teammembercont">
           {
            TeamData.map((val,ind)=>
            <Team rank={val.rank} profile={val.profileImage} name={val.name} />
            )
           }
            
        </div>
        </div>
    </div>
  )
}
