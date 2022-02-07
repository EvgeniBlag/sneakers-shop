


function App() {
  return (
    <div className="wrapper clear">

      <div style={{display:'none'}} className="overlay">

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

        <div className="cartItem d-flex align-center mb-20">
    
        <img className=" cartItemImg mr-20"
            src="/img/sneakers.jpg"
            alt="sneakers"
                          />

       <div className="mr-20">
         <p className="mb-5">Sneakers for man, Nike Air Max 270</p>
         <b>120$</b>
       </div>
       
       <img className="removeBtn"
        width={32}
         height={32}
          src="/img/btnRemove.png"
           alt="remove"
                       />
        </div>  
        <div className="cartItem d-flex align-center mb-20">

         <img className=" cartItemImg mr-20"
            src="/img/sneakers.jpg"
            alt="sneakers"
                          />

<div className="mr-20">
<p className="mb-5">Sneakers for man, Nike Air Max 270</p>
<b>120$</b>
</div>

<img className="removeBtn"
 width={32}
  height={32}
   src="/img/btnRemove.png"
    alt="remove"
                />
        </div>
        <div className="cartItem d-flex align-center mb-20">

<img className=" cartItemImg mr-20"
   src="/img/sneakers.jpg"
   alt="sneakers"
                 />

<div className="mr-20">
<p className="mb-5">Sneakers for man, Nike Air Max 270</p>
<b>120$</b>
</div>

<img className="removeBtn"
width={32}
height={32}
src="/img/btnRemove.png"
alt="remove"
       />
        </div>
       

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

<header className="d-flex  justify-between align-center p-40" >
  <div className="d-flex align-center">

    <img width={40} height={40} src="/img/logo.png" alt="logo"/>

    <div >
      <h3 className="text-uppercase">React Sneakers</h3>
      <p>Shop the beast sneakers</p>
    </div>
  </div>

  <ul className="d-flex">

    <li className="mr-30">
      <img width={18} height={18} src="/img/cart.png" alt="cart"/>
      <span>
       120$
        </span>
    </li>

    <li>
      <img width={20} height={20} src="/img/user.png" alt="user"/>
    </li>

  </ul>
</header>

<div className="content p-40">

<div className="d-flex align-center justify-between mb-40">

<h1>All sneakers</h1>

<div className="search-block d-flex">

  <img className="search-label" width={15} height={15} src="/img/search.png" alt="search"/>

 <input placeholder="Search ...."/>

</div>

</div>

<div className="d-flex">


<div className="card">

<div className="favorite">
<img width={32} height={32} src="/img/favorite.png" alt="favorite"/>
</div>

  <img width={133} height={112} src="/img/sneakers.jpg" alt="sneakers"/>
  <h5>
  Sneakers for man Nike Blazer Mid Suede
  </h5>
 <div className=" d-flex justify-between align-center">
   <div className="d-flex flex-column ">
  <span>
     price:
  </span>      
     <b>
       120$
     </b>
   </div>
   <button className="button">
     <img width={11} height={11} src="/img/plus.png" alt="plus"/>
   </button>
 </div>
  </div>


  <div className="card">
<img width={133} height={112} src="/img/sneakers2.jpg" alt="sneakers"/>
<h5>
Sneakers for man Nike Blazer Mid Suede
</h5>
<div className=" d-flex justify-between align-center">
 <div className="d-flex flex-column ">
<span>
   price:
</span>    
   <b>
     120$
   </b>
 </div>
 <button className="button">
   <img width={11} height={11} src="/img/plus.png" alt="plus"/>
 </button>
</div>
</div>


<div className="card">
<img width={133} height={112} src="/img/sneakers3.jpg" alt="sneakers"/>
<h5>
Sneakers for man Nike Blazer Mid Suede
</h5>
<div className=" d-flex justify-between align-center">
 <div className="d-flex flex-column ">
<span>
   price:
</span>    
   <b>
     120$
   </b>
 </div>
 <button className="button">
   <img width={11} height={11} src="/img/plus.png" alt="plus"/>
 </button>
</div>
</div>


<div className="card">
<img width={133} height={112} src="/img/sneakers4.jpg" alt="sneakers"/>
<h5>
Sneakers for man Nike Blazer Mid Suede
</h5>
<div className=" d-flex justify-between align-center">
 <div className="d-flex flex-column ">
<span>
   price:
</span>    
   <b>
     120$
   </b>
 </div>
 <button className="button">
   <img width={11} height={11} src="/img/plus.png" alt="plus"/>
 </button>
</div>
</div>







</div>
</div>
</div>

  );
}

export default App;
