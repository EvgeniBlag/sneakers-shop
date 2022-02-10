import React,{useState} from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {

  const [items,setItems] = useState([]);

  const [cartOpened,setCartOpened]=useState(false);

React.useEffect(()=>{

  fetch('https://6204ffec161670001741b2d8.mockapi.io/items')
  .then((res)=>{
    return res.json();
  })
  .then((json)=>{
    setItems(json);
  });

},[]);

  return (

    <div className="wrapper clear">

      { cartOpened ?  <Drawer onCloseCart={()=>setCartOpened(false)}/>: null}
     
      <Header onClickCart={()=>setCartOpened(true)}/>

<div className="content p-40">

<div className="d-flex align-center justify-between mb-40">

<h1>All sneakers</h1>

<div className="search-block d-flex">

  <img className="search-label" width={15} height={15} src="/img/search.png" alt="search"/>

 <input placeholder="Search ...."/>

</div>
</div>
<div className="d-flex flex-wrap">

{items.map((obj)=>
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
