import React, { useEffect, useState, useRef } from 'react';

interface TypeWritterProps {
    text: string;
    setAnimationStatus: Function;
    speed: number;
    tag: string;
    style: object;
}

const TypeWritter: React.FC<TypeWritterProps> = ({ text, setAnimationStatus, speed, tag, style }) => {
    
    
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
        <pre style={style}>{currentText}</pre>
        :
        <p style={style}>{currentText}</p>
        }
        </>
    )
}

export default TypeWritter;
