import { useContext, useState } from "react";
import BookmarkOn from '../img/bookmarkPageIcon.png';
import BookmarkOff from '../img/bookmarkPageIcon.png';

// import "../components/Card.css";
const Card = () =>{
    //북마크(토스트), 닫기버튼,
    const[isBookmarked, setIsBookmarked ] = useState(false)
    const[isClickImg, setIsClickImg] = useState(false);

    const bookmarkHandler = () => {
        setIsBookmarked(!isBookmarked);
    }

    const clickHandler = () => {
        setIsClickImg(!setIsClickImg)
    }
    
    

}
