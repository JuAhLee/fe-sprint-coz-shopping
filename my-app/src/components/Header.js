import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/codestatelogo.png';
import HamButton from '../img/hamburgerbutton.png';
import BookmarkIcon from '../img/bookmarkicon.png';
import ProductIcon from '../img/producticon.png';

export default function Header() {
   
    const [drop, isDropping] = useState(false);

    const clickDropHandler = () => {
        drop ? isDropping(false) : isDropping(true)
    }  // 클릭시 드롭, 안드롭

    const dropDownCom = () =>
    {
        return (
            <div>
                <li> OOO님, 안녕하세요! </li>
                <Link to = "/product/list" >
                    <img className = "icon" src = {ProductIcon} alt = "productIcon" ></img>
                    상품 페이지 리스트 
                </Link>
                <Link to = "/bookmark">
                    <img className = "icon" src = {BookmarkIcon} alt = "bookmarkIcon"></img>
                    북마크 페이지 리스트
                </Link>
            </div>
        )

    }
    // 여기까지 dropDown

    return (
        <div>
            <div>
                <Link to= "/">
                    <img className = "logo" src = {Logo} alt = " Logo" />
                </Link>

                <Link to = "/">
                    <div className = "logoLetter">COZ Shopping</div>
                </Link>
            </div>
            <img className = "HamButton" src={HamButton} alt="Menu" onClick={clickDropHandler} />
            { isDropping && <dropDownCom />}
        </div>
        
    )

}
    /*return (
        <header id = "header">
            <Link to ="/" >
                <img src={Logo} alt="Logo"></img>
                <img src = {HamButton} alt = "HamburgerButton"></img>
            </Link>
            <section onClick={clickDropHandler}>
            </section>

            <Menu className = {drop ? true : null}>
                <div> OOO님, 안녕하세요!</div>
                <Ul>
                    <Link to = "/products/list">상품 페이지 리스트</Link>
                    <Link to = "/bookmark">북마크 페이지 리스트</Link>
                </Ul>
            </Menu>

        </header>


    ) */




