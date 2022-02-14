

function Drawer (props){
    return(
        <div    className="overlay">
        <div className="drawer ">
        <h2 className=" d-flex justify-between mb-30 ">
          Cart
          <img onClick={props.onCloseCart} className="removeBtn cu-p"
             width={32}
             height={32}
             src="/img/btnRemove.png"
             alt="close"
                />
        </h2>



        <div className="items">
{Items.map((obj)=>(
  <div className="cartItem d-flex align-center mb-20">
    <div>
   style={{backgroundImage:`url(${obj.imageUrl})`}}
   className="cartItemImg"
   </div>

   <div className="mr-20 flex" >
     <p className="mb-5">{obj.title}</p>
     <b>{obj.price}</b>
   </div>

   <img onClick={()=> onRemove (obj.id)}
    className="removeBtn"
     src="/img/btnRemove.png"
     alt="Remove"
     />

  </div>
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