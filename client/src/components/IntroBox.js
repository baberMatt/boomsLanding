import React, { useState, useEffect, useRef } from 'react'

import IconButton from './IconButton'
import Arrow from './Arrow'
import HeroText from './HeroText'



const IntroBox = (props) => {
    const [msgCount, setMsgCount] = useState(1);
    const [pulse, setPulse] = useState(false)
    const [showApply, setShowApply] = useState(false)
    const [applyVis, setApplyVis] = useState("opacity-0")
    const [endIntro, setEndIntro] = useState(false)
    const [arrowSize, setArrowSize] = useState({
        width: 180,
        height: 58,
        position: 'lgArrow',
        show: 'hidden'
    })

    const [lines, setLines] = useState([
        { line: "Hard times", },
        { line: "make", },
        { line: "great people.", }
    ])


    // const [time, setTime] 

    useEffect(() => {
        if (props.windowSize?.width > 1024) {
            setArrowSize({ width: 180, height: 58, position: 'lgArrow', show: '' })
        }

        if (props.windowSize?.width < 1024) {
            setArrowSize({ width: 150, height: 48, position: 'mdArrow', show: '' })
        }

        if (props.windowSize?.width < 575) {
            setArrowSize({ width: 90, height: 29, position: 'smArrow', show: '' })
        }
       
    }, [props.windowSize])

    const showArrow = () => {
        
    }

    useEffect(() => {
        let count = 0;
        let time = 0;
        let newObj = {};

        const endIntro = () => {
            setTimeout(() => {
                props.logoFlasher('logoFlashLittle', 1)
            }, 5000);

            setTimeout(() => {
                setEndIntro(true)
                props.setMask('fadeOut')
               
            }, 4000);

            setTimeout(() => {
                setApplyVis("easeIt")
                setPulse(true)
            }, 2500);
           
        }

        const updateLines = (ct) => {
            switch (ct) {
                case 1:
                    setLines([
                        { line: "Great people", class: 'opacity-0' },
                        { line: "make", class: 'opacity-0' },
                        { line: "great pizza.", class: 'opacity-0' }
                    ])
                    break;
                case 2:
                    setLines([
                        { line: "Great people", class: '' },
                        { line: "make", class: '' },
                        { line: "great pizza.", class: '' }
                    ])
                    break;
                case 3:
                    setLines([
                        { line: "We", class: 'opacity-0' },
                        { line: "need", class: 'opacity-0' },
                        { line: "great people.", class: 'opacity-0' }
                    ])
                    break;
                default:
                    break;
            }
        }


        const fadeTextOut = (newLines) => {
            if (!newLines) {
                newLines = [...lines]
            }
            newObj = { ...lines[count], class: 'heroTxt' }
            if (msgCount === 3 && count > 3) {
                setTimeout(() => {
                    updateLines(msgCount)
                    setMsgCount(msgCount + 1)

                }, 1000);

            } else {
                setTimeout(() => {
                    newLines = newLines.map(item => item.line !== newObj.line ? item : newObj)
                    setLines([...newLines])

                    if (count <= 3) {
                        time += 300;
                        count++
                        fadeTextOut(newLines);
                    } else {
                        updateLines(msgCount);
                        setMsgCount(msgCount + 1)
                    }
                }, time);
            }
        }

        const fadeTextIn = (newLines) => {
            if (!newLines) {
                newLines = [...lines]
            }
            console.log(newLines)
            newObj = { ...lines[count], class: 'heroTxtIn' }
            if (msgCount === 4) {
                newObj.class = ""
            }
            setTimeout(() => {
                newLines = newLines.map(item => item.line !== newObj.line ? item : newObj)
                setLines([...newLines])
                if (count <= 3) {
                    time += 300;
                    if (msgCount === 4) {
                        time += 300;
                        endIntro();
                    }
                    count++
                    fadeTextIn(newLines);
                } else {
                    updateLines(msgCount)
                    setMsgCount(msgCount + 1)
                }
            }, time);
        }





        switch (msgCount) {
            case 1:
                setTimeout(() => {
                    fadeTextOut(lines)
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    fadeTextIn(lines)
                }, 1000);
                break;
            case 3:
                setTimeout(() => {
                    fadeTextOut(lines)
                }, 1000);
                break;
            case 4:
                setTimeout(() => {
                    fadeTextIn(lines)
                }, 1000);
            default:
                break;
        }
    }, [msgCount])

    return (
        <div className='flex flex-col w-full justify-center z-30 absolute h-screen '>
            <HeroText
                endIntro={endIntro}
            >
                {lines.map(item => <div className='txtShadow flex justify-center drop-shadow-2xl'> <h1 className={`text-center my-5 font-karbonBold text-boomsWhite text-6xl md:text-8xl  my-2 ${item.class}`}>{item.line} </h1></div>)}
            </HeroText>
            <div className={`flex w-full justify-center relative ${applyVis}`}>
                <Arrow
                    pulse={pulse}
                    setPulse={setPulse}
                    arrowSize={arrowSize}
                    setArrowSize={setArrowSize} 
                />
                <IconButton text="Apply Here!" />
            </div>
        </div>
    )
}

export default IntroBox