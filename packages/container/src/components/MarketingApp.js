import {mount} from "marketing/MarketingApp";
import React, {useRef, useEffect} from "react";

export default ({onSignIn}) => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current, {initialPath: window.location.pathname, onSignIn});
    }, []);

    return <div ref={ref} />;
}