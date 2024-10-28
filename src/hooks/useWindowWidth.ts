import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [state, setState] = useState(window.innerWidth);

    useEffect(() => {
        const getWidth = () => {
            setState(window.innerWidth);
        };

        // Add event listener to track window resize
        window.addEventListener("resize", getWidth);

        // Clean up on unmount
        return () => window.removeEventListener("resize", getWidth);
    }, []);

    return Number(state);
};

export default useWindowWidth;
