import React,{useState} from 'react';
import styles from './Card.module.scss';

function Card(props) {

 const[isAdded,setIsAdded]=useState(false);

 const onClickPlus=()=>{
   setIsAdded(!isAdded);
 }

 return(
<div className={styles.card}>
<div className={styles.favorite}>
<img width={32} height={32} src="/img/favorite.png" alt="favorite"/>
</div>
  <img width={133} height={112} src={props.imageUrl} alt="sneakers"/>
  <h5>
 {props.title}
  </h5>
 <div className=" d-flex justify-between align-center">
   <div className="d-flex flex-column ">
  <span>
     price:
  </span>      
     <b>
       {props.price}$
     </b>
   </div>
   
     <img className={styles.plus} onClick={onClickPlus} src={ isAdded ? "/img/checked.png " : "/img/plus.png" } alt="plus"/>
   
 </div>
</div>
 );
}

export default Card;