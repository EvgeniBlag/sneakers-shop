
function ItemDriwer(props){
    return(
        <div className="cartItem d-flex align-center mb-20">
    
        <img className=" cartItemImg mr-20"
            src={props.imageUrl}
            alt="sneakers"
                          />

       <div className="mr-20">
         <p className="mb-5">{props.title}</p>
         <b>{props.price}$</b>
       </div>
       
       <img className="removeBtn"
        width={32}
         height={32}
          src="/img/btnRemove.png"
           alt="remove"
                       />
        </div>  
    );
}

export default ItemDriwer;