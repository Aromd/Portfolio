import React, { useEffect, useState, useRef } from 'react';

interface TypeWritterProps {
    text: string;
    setAnimationStatus: Function;
}

const TypeWritter: React.FC<TypeWritterProps> = ({ text, setAnimationStatus }) => {
    
    
    const index = useRef(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
            if(index.current === 443){
                setTimeout(() =>
                setAnimationStatus(false), 600
                )
            } 
        }, 2);
    }, [currentText, text, setAnimationStatus]);

    return (
        <pre>{currentText}</pre>
    )
}

export default TypeWritter;
