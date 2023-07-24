import {useEffect, useRef} from "react";

export const Ref=()=>{
    const ref = useRef(null);
    useEffect(() => {
        return () => {
            console.log(ref.current.props)
        };
    }, []);

    return(
        <>
            <div>
                <p ref={ref}>123</p>
            </div>
        </>
    )
}
