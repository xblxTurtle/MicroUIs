import { renderMarketing } from 'marketing/MarketingRoot';
import React, {useRef, useEffect} from 'react';


export default () => {
    const ref = useRef(null);
    useEffect(() => {
        renderMarketing(ref.current);
    });
    return <div ref={ref}/>;
}
