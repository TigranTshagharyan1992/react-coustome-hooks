import React, {useRef} from 'react';
import UseHover from "./useHover";

const Hover = () => {
    const ref = useRef();
    const hover = UseHover(ref);

    return (
        <div ref={ref} style={{width: 300, height: 400, background: hover ? 'red':'green'}}>

        </div>
    );
};

export default Hover;