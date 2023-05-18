import {useState, useEffect} from "react";

const LocalStorage = (key, initState) => {
    const [state, setState] = useState(
        () => JSON.parse(window.localStorage.getItem(key)) || initState
    );

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state));
    },[key, state]);
    
    return [state, setState]
}
export default LocalStorage;