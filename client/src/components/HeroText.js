import React, {useState, useEffect, useRef, forwardRef, Children, cloneElement } from 'react'

const FunctionComponentForward = forwardRef((props, ref) => (
    <div ref={ref}></div>
));

const HeroText = ( props ) => {
    const childrenRef = useRef([]);
    const [fadeText, setFadeText] = useState('');
    
    useEffect(() => {
        if (props.endIntro) {
            setFadeText('easeItOut')
        }
      }, [props.endIntro]);

    return (
        <div className={`${fadeText}`}>
            {/* {children} */}
            {React.Children.map(props.children, (child, index) =>
                React.cloneElement(child, {
                    ref: (ref) => (childrenRef.current[index] = ref)
                })
            )}
        </div>
    )
}

export default HeroText