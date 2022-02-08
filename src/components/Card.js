

function Card() {
 return(
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
 );
}

export default Card;