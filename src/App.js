import React,{useState} from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items,setItems] = useState([]);

  const [cartOpened,setCartOpened]=useState(false);

  const[searchValue,setSearchValue]=useState('');

React.useEffect(()=>{

  fetch('https://6204ffec161670001741b2d8.mockapi.io/items')
  .then((res)=>{
    return res.json();
  })
  .then((json)=>{
    setItems(json);
  });

},[]);


const onChangeInput =(event)=>{
  setSearchValue(event.target.value);
};

  return (

    <div className="wrapper clear">

      { cartOpened ?  <Drawer onCloseCart={()=>setCartOpened(false)}/>: null}
     
      <Header onClickCart={()=>setCartOpened(true)}/>

<div className="content p-40">

<div className="d-flex align-center justify-between mb-40">

<h1>{ searchValue ? `Search by request:${searchValue}`:'All sneakers'}</h1>

<div className="search-block d-flex">

  <img className="search-label" width={15} height={15} src="/img/search.png" alt="search"/>



 {searchValue &&( 
   <img
    onClick={()=>setSearchValue('')}
     className="clear cu-p"
      src="/img/btnRemove.png"
       alt="Clear"/>)}


 <input onChange={onChangeInput} value={searchValue} placeholder="Search ...."/>

</div>
</div>
<div className="d-flex flex-wrap">

{items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
 .map((item,index)=>
 (
   <Card
   key={index}
   title={item.title}
   price={item.price}
   imageUrl={item.imageUrl}
 />
))}

</div>
</div>
</div>
  );
}

export default App;
