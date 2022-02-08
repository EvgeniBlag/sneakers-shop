import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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


<Card/>
<Card/>
<Card/>
<Card/>




</div>
</div>
</div>
  );
}

export default App;
