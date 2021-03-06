import React, { useState, useEffect } from 'react'

const Arrow = (props) => {
    const [size, setSize] = useState('');
    const [easeOut, setEaseOut] = useState('');

    console.log(props.arrowSize)
    useEffect(() => {
        if (props.pulse) {
            setSize('biggerArrow')
        }
    }, [props.pulse])

    useEffect(() => {
        if (props.pulse) {
            setTimeout(() => {
                props.setPulse(false)
                
            }, 750);
            setTimeout(() => {
                setEaseOut('easeItOut')
            }, 1750);
        }

        if (props.pulse) {
            setTimeout(() => {
                if (size) {
                    setSize('');
                } else {
                    setSize('biggerArrow')
                }
            }, 250);
        }
    }, [size])


    return (
        <svg id="arrow" className={`z-30 ${size} ${props.arrowSize?.position} ${props.arrowSize?.show} ${easeOut}`} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={`${props.arrowSize?.width.toString()}pt`} height={`${props.arrowSize?.height.toString()}pt`} viewBox="0 0 222.000000 84.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)"
                fill="#DAA900" stroke="none">
                <path d="M90 710 c0 -38 28 -76 107 -147 202 -181 451 -313 718 -381 179 -45
                    235 -52 425 -52 259 -1 431 37 587 130 49 28 53 29 53 11 0 -11 -4 -30 -9 -43
                    -4 -13 -11 -44 -15 -69 -6 -38 -3 -50 15 -73 27 -34 45 -22 54 37 11 62 62
                    209 106 305 21 47 39 94 39 106 0 43 -51 87 -62 54 -2 -6 -40 -17 -84 -24 -43
                    -7 -101 -17 -129 -22 -27 -5 -99 -18 -160 -27 -60 -10 -114 -22 -119 -26 -12
                    -10 0 -51 21 -78 l18 -21 145 24 c80 13 153 28 163 31 34 14 7 -20 -46 -56
                    -211 -144 -551 -189 -925 -123 -117 21 -292 79 -420 140 -134 64 -325 198
                    -411 288 -39 40 -71 47 -71 16z"/>
            </g>
        </svg>
    )
}

export default Arrow

// "222.000000pt"
// "84.000000pt"