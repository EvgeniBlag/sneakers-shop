

function Drawer (){
    return(
        <div style={{display:'none'}}  className="overlay">
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
    );
}

export default Drawer;