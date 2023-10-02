import {useEffect, useState} from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

const KeyDown = () => {
    const [shiftKeyDown, setShiftKeyDown] = useState('');
    // useEffect(() => {
    //     const handleKeyDown = (event:any) => {
    //         if (event.key === 'Shift') {
    //             setShiftKeyDown(true);
    //         } else {
    //             setShiftKeyDown(false);
    //         }
    //     };
    //     window.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);
    useEffect(() => {
        console.log(shiftKeyDown)
    }, [shiftKeyDown]);
    return (
        <>
            <KeyboardEventHandler
                handleKeys={['w', 's', 'a', 'd', 'shift']}
                onKeyEvent={(key: any, e: any) =>
                    setShiftKeyDown(key)
                }>
            </KeyboardEventHandler>
            <div>
                {shiftKeyDown}
            </div>
        </>

    )
}
export default KeyDown
