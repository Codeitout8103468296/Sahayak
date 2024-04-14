import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Box({organization,address,city,state}) {
  return (
    <Card style={{ width: '20rem',display:"flex" ,minHeight:"200px"}}>
      {/* <Card.Img style={{height:'180px'}} variant="top" src={urlToImage} /> */}
      <Card.Body style={{
   }}>
        <div style={{textAlign:"left"}}>
         <div style={{fontSize:"1.2rem",fontWeight:"600"}}> Orphanage:</div>
         <div style={{fontSize:"1rem"}}> {organization}</div></div>
        <div style={{fontSize:"1rem",textAlign:"left"}}>
        <div> Address:
        </div>       <div style={{fontSize:"0.8rem"}}> {address}</div>
        </div>
        <div style={{fontSize:"1rem",textAlign:"left"}}>
         City: {city}
        </div>
        <div style={{fontSize:"1rem",textAlign:"left"}}>
         State: {state}
        </div>
       
      </Card.Body>
      
    </Card>
  );
}

export default Box;