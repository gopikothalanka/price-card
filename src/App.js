import './PriceCard.css'
import PriceCard from './PriceCard';
import pricingTable from './PriceCardData'

var priceTag = pricingTable.map(   (pricingTable) =>   <PriceCard key={pricingTable.id} 
price={pricingTable.price} 
plan={pricingTable.plan} 
moneyBack={pricingTable.moneyBack} 
storage={pricingTable.storage}
node={pricingTable.node}
database={pricingTable.database}
domain={pricingTable.domain}
free={pricingTable.free}
others={pricingTable.others}
 />)





function App() {
  return (
    <div >
      <h1 className="heading">Price Cards</h1>

      <div className="App">{priceTag}</div>
      {/* <PriceCard price={pricingTable[0].price} plan={pricingTable[0].plan} 
      moneyBack={pricingTable[0].moneyBack} 
      storage={pricingTable[0].storage}
      node={pricingTable[0].node}
      database={pricingTable[0].database}
      domain={pricingTable[0].domain}
      free={pricingTable[0].free}
      others={pricingTable[0].others}
      ButtonBg={pricingTable[0].ButtonBg}
       /> */}
       
    </div>
    
  );
}

export default App;
