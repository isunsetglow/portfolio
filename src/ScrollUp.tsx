import {useState, useEffect} from "react";
import {FaArrowUp} from "react-icons/fa";

const ScrollUp = () => {
    const [showScrollTopButton, setShowScrollButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if(window.scrollY > 300) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }  
        });
        
    }, [])

    const scrolltTop = () => {
        // elementRef.current.scrollIntoView({ behavior: 'smooth' })
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
          {showScrollTopButton && <FaArrowUp className='top-bttn-position' onClick={scrolltTop} />}
        </div>
        
    );
};

export default ScrollUp;