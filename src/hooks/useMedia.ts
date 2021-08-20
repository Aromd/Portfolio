import { useState, useEffect } from "react";

export const useMedia = (media: number ) => {

    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        const mediaWatcher = window.matchMedia(`screen and (max-width: ${media}px)`);
        setIsNarrowScreen(mediaWatcher.matches);  
        
        function updateIsNarrowScreen(e:any) {
          setIsNarrowScreen(e.matches);
        }
        if(mediaWatcher.addEventListener) {
          mediaWatcher.addEventListener('change', updateIsNarrowScreen)
          return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
          }
        } else {
          // backwards compatibility
          mediaWatcher.addListener(updateIsNarrowScreen)
          return function cleanup() {
            mediaWatcher.removeListener(updateIsNarrowScreen)
          }
        }
      }, [media, ]);

      return [isNarrowScreen];
}