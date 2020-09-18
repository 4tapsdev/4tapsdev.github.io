import { useCallback, useState, useRef } from "react";
import { useDocumentEvent } from "./useDocumentEvent";


/**
 * Functions which performs a click outside event listener
 * @param {*} onAfterClose some extra function call to do after click
 */
export const useClickOutside = (onAfterClose = null) => {
    const ref = useRef(null);
    const [clickedOutside, setClickedOutside] = useState(false);

    const handleClickOutside = useCallback(
        (event) => {
            if (!clickedOutside || (ref.current && ref.current.contains(event.target))) {
                return
            }
            setClickedOutside(false);
            onAfterClose && onAfterClose()
        },
        [clickedOutside, ref, onAfterClose]
    );

    const events = [];

    if (typeof window !== 'undefined' && window.PointerEvent) {
        events.push({ type: 'pointerdown', callback: handleClickOutside });
    } else {
        events.push({ type: 'mousedown', callback: handleClickOutside });
        events.push({ type: 'touchstart', callback: handleClickOutside });
    }
    useDocumentEvent(events);
    return [ref, clickedOutside, setClickedOutside]
};
