import react from 'react';
import {useState,useEffect} from 'react';
import {Card,Row,Col,Typography} from 'antd';
import {Link} from 'react-router-dom';
import millify from 'millify';
const {Title}=Typography;
function Currencies()
{
  const [coin,setcoin]=useState([{name:'',symbol:'',icon:'',marketCap:1,price:'',uuid:''}]);
  const[search,setsearch]=useState('');
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'd3be3a5d24mshbfa50ec251411f9p13c69djsned371b88b8d3'
    }
  };
  useEffect(()=>{fect()},[search]);
  const fect=()=>{
  fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
    .then(response => response.json())
    .then(res=>{
    let dataCoins=res.data.coins;
    let newOBJECT=[{name:"",symbol:"",icon:"",marketCap:"",price:'',uuid:""}];
    dataCoins.map((index)=>{newOBJECT.push({name:index.name,symbol:index.symbol,icon:index.iconUrl,marketCap:index.marketCap,price:index.price,uuid:index.uuid})})
    let pop=newOBJECT.shift();
    let filter=[{name:"",symbol:"",icon:"",marketCap:"",price:'',uuid:''}];
    filter=newOBJECT.filter((index)=>index.name.toLowerCase().includes(search));
    let pop2=filter.shift();
    setcoin(filter);
    console.log(coin);
    })
  }
  return(
    <>
      <Col className="coin-heading-container">
        <Title level={1} className="coin-name">
          Top 50 Cryptos of the World
        </Title>
      </Col>
    <div className="search">
      <input placeholder="Search-Currency"
      onChange={(e)=>setsearch(e.target.value.toLowerCase())}/>
    </div>
    <div class="Currency">
      <Row gutters={[32,32]} className="Card-Container">
        {coin.map((index)=>(
          <Col xs={24} sm={12} lg={6} className="Card">
            <Link key={index.uuid} to={`/${index.uuid}`}>
            <Card className="card" 
            bordered={true}
            title={<Title level={3}>{index.name}</Title>}
            extra={<img className="img"src={index.icon}/>}
            hoverable >
              <p><b>Symbol :</b>{index.symbol}</p>
              <p><b>Market Cap :</b>{(millify(parseInt(index.marketCap)))}</p>
              <p><b>Price :</b>{((parseInt(index.price)))}$</p>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
      {console.log(search)};
    </div>
    </>
  )
}

export default Currencies;
