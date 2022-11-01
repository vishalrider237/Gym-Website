import './Plans.css'
import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-containeer" id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{
            gap:'2rem'
        }}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>WITH US</span>
        </div>
        <div className="plans">
            {plansData.map((plans,i)=>{ 
                return(                   
                <div className="plan" key={i}>
                    {plans.icon}
                    <span>{plans.name}</span>
                    <span>₹{plans.price}</span>
                    <div className="features">
                        {plans.features.map((feature,i)=>{
                            return(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div >
                        <span>See More Benefits {'->'}</span>
                    </div>
                    <button className="btn">
                        Join Now
                    </button>
                </div>
)})}
        </div>
    </div>
  )
}

export default Plans
