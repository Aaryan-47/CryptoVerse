import {useState,useEffect} from 'react';
import {Row,Col,Avatar,Typography,Collapse} from 'antd';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
const { Text } = Typography;
const { Panel } = Collapse;
function Exchange()
{
  const [exchange,setexchange]=useState([{}]);
  useEffect(()=>{fetching()},[]);
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		'X-RapidAPI-Key': 'd3be3a5d24mshbfa50ec251411f9p13c69djsned371b88b8d3'
	}
};
  const fetching=()=>{
    fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response =>{
        let data=response?.data?.coins;
        setexchange(data);
        console.log(exchange[0].rank);
    })
  }
  return(
      <>
    <Row>
    <Col span={6}>Exchanges</Col>
    <Col span={6}>24h Trade Volume</Col>
    <Col span={6}>Markets</Col>
    <Col span={6}>Change</Col>
  </Row>
  <Row>
    {exchange.map((exchange) => (
      <Col span={24}>
        <Collapse>
          <Panel
            key={exchange.uuid}
            showArrow={false}
            header={(
              <Row key={exchange.uuid}>
                <Col span={6}>
                  <Text><strong>{exchange.rank}.</strong></Text>
                  <Avatar className="exchange-image" src={exchange.iconUrl} />
                  <Text><strong>{exchange.name}</strong></Text>
                </Col>
                <Col span={6}>${(exchange?.name)}</Col>
                <Col span={6}>{(exchange.numberOfMarkets)}</Col>
                <Col span={6}>{(exchange.marketShare)}%</Col>
              </Row>
              )}
          >
            {HTMLReactParser(exchange.description || '')}
          </Panel>
        </Collapse>
      </Col>
    ))} 
  </Row>
</>
  )
}
export default Exchange