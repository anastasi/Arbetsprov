import React from 'react'
import './Loader.css'

const Loader = () => {
    return(
        <div>
            <p className="circle">
                <span className="ouro ouro3">
                    <span className="left"><span className="anim"></span></span>
                    <span className="right"><span className="anim"></span></span>
                </span>
            </p>
        </div>
    )
}

export default Loader