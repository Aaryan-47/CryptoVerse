import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import {Row,Col,Typography} from 'antd';
import 'chart.js/auto';
import HTMLReactParser from 'html-react-parser';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
const {Title,Text}=Typography;
function Details()
{
  const {coinId}=useParams();
  console.log(coinId);
  const [Chartdetail,setChartdetail]=useState({});
  const[Coindetail,setCoindetail]=useState({});
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		'X-RapidAPI-Key': 'd3be3a5d24mshbfa50ec251411f9p13c69djsned371b88b8d3'
	}
};
  useEffect(()=>{data()},[]);
  const data= ()=>{
    fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${coinId}&timePeriod=7d`, options)
	.then(response => response.json())
	.then(result=>{
       let details=result?.data?.history;
       setChartdetail(details);
       console.log(Chartdetail);
    })
    data2();
}
const data2=()=>{
    console.log(coinId);
    fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=${coinId}`, options)
	.then(res => res.json())
	.then(result2=>{
        let details2=result2?.data?.coin;
        setCoindetail(details2);
        console.log(details2);
    })
  }
  const coinPrice=[];
  const coinTimeStamp=[];
 for(let i=0;i<Chartdetail.length;i++){
 coinTimeStamp.push(new Date(parseInt(Chartdetail[i]?.timestamp)*1000).toLocaleDateString());
 coinPrice.push(Chartdetail[i]?.price);
 }
 const Gdata = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: true,
        backgroundColor: 'red',
        borderColor: 'red',
      },
    ],
  };

  
  return(
     <>
    
     <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={1} className="coin-name">
          {Coindetail.name} ({Coindetail.symbol}) Price
        </Title>
        <p>{Coindetail.name} live price in US Dollar (USD) of the last seven days. View value statistics, market cap and supply.</p>
      </Col>
      </Col>
      <Line data={Gdata} ></Line>
      <div className="center">
        <Row>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">What is {Coindetail.name}?</Title>
          {HTMLReactParser(""+Coindetail.description)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{Coindetail.name} Links</Title>
          {Coindetail.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
      </Row>
      </div>
     </>
  )
}
export default Details;