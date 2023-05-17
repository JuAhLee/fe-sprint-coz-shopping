import React, {  useEffect , useState } from 'react';

import LocalStorage from "../LocalStorage";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import Product from "../components/Card"

//import BookMarkList from "../components/BookmarkData";
//import ProductList from "../components/Productlist";
//<ProductList />
//<BookMarkList />   아직 구현 안한 것들

const Main = () => {

  const [data, setData] = LocalStorage("bookmarkList",[]);
  const [bookmarkItems, setBookmarkItems] = LocalStorage("bookmarkLists", []);

  const getData =  () => {
   
     fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
    .then(res => res.json())
    .then( data => {
      console.log(data)
      setData('key', JSON.stringify(data))
    })

    /*.catch(err => {
      err
    })*/
   
  }

  useEffect ( () => {
   getData();
  }, [] );


  




    return (
      <div className="Main">
        <Header />
        <div className = "ProductsListSection">
          <title> 상품 리스트 </title>
          <div>상품 리스트</div>
          

        </div>
        <div className = "BookmarkListSection">
          <title> 북마크 리스트 </title>
          <div>북마크 리스트</div>
        </div>

        <Footer />
       
       
      </div>
    );
  };
  
  export default Main;