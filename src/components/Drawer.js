import ItemDriwer from "./ItemDriwer";

 const arr2=[
   {
     title:"Sneakers for man Nike Blazer Mid Suede",
     price:120  ,
     imageUrl:"/img/sneakers.jpg"
   },
   {
    title:"Sneakers unisex Nike Kyrie 7",
    price:140  ,
    imageUrl:"/img/sneakers2.jpg"
  }
];

function Drawer (){
    return(
        <div style={{display: "none"}}   className="overlay">
        <div className="drawer ">
        <h2 className=" d-flex justify-between mb-30 ">
          Cart
          <img className="removeBtn cu-p"
             width={32}
             height={32}
             src="/img/btnRemove.png"
             alt="remove"
                />
        </h2>
        <div className="items">

       {arr2.map((obj)=>(
         <ItemDriwer
         title={obj.title}
         price={obj.price}
         imageUrl={obj.imageUrl}/>
       ))}
        
        </div>
     <div className="cartTotalBlock">
        <ul>
          <li >
            <span>Total:</span>
            <div></div>
            <b>210$</b>
          </li>
          <li>
          <span>IVA 5%:</span>
            <div></div>
            <b>115$</b>
          </li>
        </ul>
       <button className="greenButton">Checkout  <img src="/img/arrow.svg" alt="Arrow"/> </button> 
        </div>
      </div>
    </div>
    );
}

export default Drawer;