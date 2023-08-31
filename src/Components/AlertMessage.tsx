
import { useState, useEffect } from 'react'

type AlertMessageProps = {
    isFetched: boolean;
    alertType: string;
    message: string;
}

function AlertMessage({ isFetched, alertType, message }: AlertMessageProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Adjust the duration as needed (in milliseconds)

        return () => {
            clearTimeout(timeout);
        };
    }, [isFetched]); // Empty dependency array ensures the effect runs only once

    return (
        <div className={`toast z-[999] ${isVisible ? "animate-fadeIn " : "animate-fadeOut"}`}>
            <div className={`alert ${alertType}`}>
                <span className='text-current font-bold text-2xl'>{message}</span>
            </div>
        </div>
    )
}

export default AlertMessage