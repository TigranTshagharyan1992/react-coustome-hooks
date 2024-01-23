import React, {useEffect, useRef, useState} from 'react';

const UseHover = (elem) => {
        const [isHovering,setHovering] = useState(false);
        const on = () => setHovering(true);
        const off = () => setHovering(false);
        
            useEffect( () => {
                console.log(elem.current);
                if(!elem.current){
                    return;
                }
                const element = elem.current;
                element.addEventListener('mouseenter', on);
                element.addEventListener('mousemove', on);
                element.addEventListener('mouseleave', off);
            },[elem])

    return isHovering
};

export default UseHover;