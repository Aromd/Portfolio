import { useState, useEffect, useRef } from 'react';

type NearProps = {
    distance: string;
} 

const useNearScreen = ( {distance = "100px"}: NearProps) => {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef<any>(null);

    useEffect(() => {
        let observer: IntersectionObserver;

        const onChange = (entries: any, observer: IntersectionObserver) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true);
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
            ? IntersectionObserver
            : import('intersection-observer')
        ).then( () => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })

            fromRef && observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()
    })

    return { isNearScreen, fromRef }
}

export default useNearScreen;