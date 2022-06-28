import {Row,Col,Card,Typography} from 'antd';
import {Link} from 'react-router-dom';
import logo1 from '../images/op.jpg'
import logo2 from '../images/op2.jpg'
import logo3 from '../images/op3.jpg'
import logo4 from '../images/prime2.png'
const{Title}=Typography
function Home()
{
  return(
      <>
      <div className="body">
      <Col xs={24} lg={24}>
          <Card className="df">
              <img className="main4" src={logo4}></img>
          </Card>
      </Col>
      <Row gutter={[32,32]}>  
       <Col xs={24} lg={12}>   
        <Card hoverable className="df"> 
        <div className="main1">
        <img className="main-img1"src={logo1}/>
        <Link to="currencies"><Title className="text" level={2}>Crypto-Currencies</Title></Link>
        </div>
        </Card>
       </Col>
       
       <Col xs={24} lg={12}>
        <Card hoverable className="df"> 
        <div className="main1">
        <img className="main-img1"src={logo2}/>
        <Link to="news"><Title className="text"level={2}>Crypto-News</Title></Link>
        </div>
        </Card>
       </Col>
      </Row>
      </div>
      </>
  )
}
export default Home;