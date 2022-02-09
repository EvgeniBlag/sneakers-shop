import React,{useState} from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr =[
  {
    title:"Sneakers for man Nike Blazer Mid Suede",
    price:120,
    imageUrl:"/img/sneakers.jpg"
  },

  {
    title:"Sneakers unisex Nike Kyrie 7",
    price:140,
    imageUrl:"/img/sneakers2.jpg"
  },
  {
    title:" Sneakers for man Jordan Air Jordan 11",
    price:280,
    imageUrl:"/img/sneakers3.jpg"
  },
  {
    title:" Sneakers for man Nike LeBron XVIII",
    price:164,
    imageUrl:"/img/sneakers4.jpg"
  },

];

function App() {


  return (

    <div className="wrapper clear">

  

      <Drawer/>
      <Header/>

<div className="content p-40">

<div className="d-flex align-center justify-between mb-40">

<h1>All sneakers</h1>

<div className="search-block d-flex">

  <img className="search-label" width={15} height={15} src="/img/search.png" alt="search"/>

 <input placeholder="Search ...."/>

</div>
</div>
<div className="d-flex">

{arr.map((obj)=>
 (
   <Card
   title={obj.title}
   price={obj.price}
   imageUrl={obj.imageUrl}
 />
))}

</div>
</div>
</div>
  );
}

export default App;
