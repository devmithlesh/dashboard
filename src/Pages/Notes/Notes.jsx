// window like 767 
const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
}

useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
        window.removeEventListener('resize', setWindowDimensions)
    }
}, []);

{ windowWidth >= 767 ? <div></div> : '' }

// menu click on body then close
const ref = useRef();

useEffect(() => {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsActive(false); //value need to be change with state
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [ref]);

// <div ref={ref}></div>   close the menu any where click on body