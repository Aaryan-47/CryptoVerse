import {useState,useEffect} from 'react';
import {Card,Row,Col,Typography,Avatar} from 'antd';
const{Title}=Typography
function News()
{
    const[news,setnews]=useState([]);
    const[category,setcategory]=useState('crypto');
    useEffect(()=>{fects()},[category]);
    const fects=()=>{
        
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                'X-RapidAPI-Key': 'd3be3a5d24mshbfa50ec251411f9p13c69djsned371b88b8d3'
            }
        };
        
        fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${category}&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
            .then(response => response.json())
            .then(data=>{
                let newsData=data.value;
                setnews(newsData);
                console.log(news);
            })
}
    return (
        <>
        <Col className="coin-heading-container">
        <Title level={1} className="coin-name">
         Latest Crypto-Currency News
        </Title>
      </Col>
        <div className="search">
      <input placeholder="Search News"
       onChange={(e)=>setcategory(e.target.value)}/>

    </div>
        <Row gutters={[32,32]}>
        {news.map((index)=>(
            <Col xs={24} sm={12} lg={8} className="news-card">
                <Card hoverable>
                <a href={`${index.url}`}>
                    <div className="news">
                    <Title level={4}>{`${index.name}`}</Title>
                    <img className="new-img"src={index?.image?.thumbnail?.contentUrl} alt="" />
                    </div>
                    </a>
                    <div className="description-container">
                    <p>
                        {
                           `${index.description.substring(0,150)}`
                        }
                        ...
                    </p>
                    </div>
                    <div className="provider-container">
                        <Avatar src={`${index?.provider[0]?.image?.thumbnail?.contentUrl}`}></Avatar>
                        <p>{`${index?.provider[0]?.name}`}</p>
                    </div>
                </Card>
            </Col>
        ))}
        </Row>
        </>
    )
    
}
export default News