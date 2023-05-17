import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/codestatelogo.png';
import HamButton from '../img/hamburgerbutton.png';
import BookmarkIcon from '../img/bookmarkPageIcon.png';
import ProductIcon from '../img/producticon.png';

export default function Header() {
   
    const [isDropped, setDrop] = useState(false);  // 상태변수 직관적으로 바꾸기

    const clickDropHandler = () => {
        isDropped ? setDrop(false) : setDrop(true)
    }  // 클릭시 드롭, 안드롭

    const DropDown = () =>   // 컴포넌트는 대문자로 시작.
    {
        return (
            <div>
                <li> OOO님, 안녕하세요! </li>
                <li>
                    <Link to = "/product/list" >
                        <img className = "icon" src = {ProductIcon} alt = "productIcon" ></img>
                        <span>상품 페이지 리스트</span> 
                    </Link>
                </li>
                <li>

                    <Link to = "/bookmark">
                        <img className = "icon" src = {BookmarkIcon} alt = "bookmarkIcon"></img>
                        <span>북마크 페이지 리스트</span>
                    </Link>
                </li>
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
                    <span className = "logo_Text">COZ Shopping</span>   
                </Link>

                <img className = "HamButton" src={HamButton} alt="Menu" onClick={clickDropHandler} />
            { isDropped ? <DropDown /> : null}
            </div>
           
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




