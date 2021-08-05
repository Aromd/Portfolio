import React, { useEffect, useState, useRef } from 'react';

interface TypeWritterProps {
    text: string;
    setAnimationStatus: Function;
    speed: number;
    tag: string;
}

const TypeWritter: React.FC<TypeWritterProps> = ({ text, setAnimationStatus, speed, tag }) => {
    
    
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
        }, speed);
    }, [currentText, text, setAnimationStatus, speed]);

    return (
        <>
        {
            (tag === "pre")?
        <pre>{currentText}</pre>
        :
        <p>{currentText}</p>
        }
        </>
    )
}

export default TypeWritter;
