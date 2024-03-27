import { Fragment, useRef } from "react";
import './ThemeMode.css';

function ThemeMode()
{
    const checkRef = useRef(null);
    const handleMode = ()=>{
        console.log(checkRef.current.checked);
    }
    return(
        <Fragment>
            <div className="theme-box">
                <input type="checkbox" ref={checkRef} className="btn dark" onClick={handleMode}></input>
            </div>
        </Fragment>
    )
}
export default ThemeMode; 