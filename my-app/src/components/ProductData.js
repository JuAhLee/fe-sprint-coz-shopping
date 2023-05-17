import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

 const Product__Things = [
  {
    id: 1,
    type: "Product",
    title: "Pancake",
    price: "4500",
    discountPercentage: 12,
    image_url:"C:\Users\jua07\Desktop\solo_img\product\product__img.png"
    
  },
  {
    id: 10,
    type: "Category",
    title: "# Fruit",
    image_url: "C:\Users\jua07\Desktop\solo_img\product\cartegory__img.png",
  },
  {
    id: 20,
    type: "Exhibition",
    title: "About brunch by brunch for brunch",
    sub_title: "Brunch Meal Kit",
    image_url: "C:\Users\jua07\Desktop\solo_img\product\exhibition__img.png",
  },
  {
    id: 30,
    type: "Brand",
    brand_name: "google",
    brand_image_url: "C:\Users\jua07\Desktop\solo_img\product\brand__img.png",
    follower: 654321,
  },
];



const Bookmark__Things = [
    {
      id: 2,
      type: "Product",
      title: "Table & Chair",
      sub_title: null,
      price: "199000",
      discountPercentage: 8,
      image_url:"C:\Users\jua07\Desktop\solo_img\bookmark\Product__Bookmark.png",
      follower: null,
      
    },
    {
      id: 11,
      type: "Category",
      title: "# Coffie Time",
      sub_title: null,
      price: null,
      discountPercentage: null,
      image_url: "C:\Users\jua07\Desktop\solo_img\bookmark\Cartegory__Bookmark.png",
      follower: null,
    },
    {
      id: 21,
      type: "Exhibition",
      title: "blue keyboard",
      sub_title: "VVvvvery noisy",
      price: null,
      discountPercentage: null,
      image_url: "C:\Users\jua07\Desktop\solo_img\bookmark\Exhibition__Bookmark.png",
      follower: null,
    },
    {
      id: 31,
      type: "Brand",
      title: "Toss",
      sub_title : null,
      price : null,
      discountPercentage: null,
      image_url: "C:\Users\jua07\Desktop\solo_img\bookmark\Brand__Bookmark.png",
      follower: 777777,
    },
  ];



//export default Product__Things;
//export default Bookmark__Things;  // 모듈 자체를 내보낼 수 없음.

function ItemList() {
    return (
      <div className={styles["item-list"]}>
        {mockData.map((el, i) => (
          <Item key={i} dataObj={el} />
        ))}
      </div>
    );
  }

  export default ItemList;


