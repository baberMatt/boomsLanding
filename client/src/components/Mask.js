import React, { useState, useEffect } from 'react';



const Mask = (props) => {
    

    // useEffect(() => {
    //     setMask('fadeOut')
    // }, [])


    return (
        <div className={`z-20 absolute h-screen w-screen bg-boomsBlack ${props.mask}`}>
          
        </div>
    )
}

export default Mask
