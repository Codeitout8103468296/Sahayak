import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Box({organization,address,city,state}) {
  return (
    <Card style={{ width: '20rem',display:"flex" ,minHeight:"150px"}}>
      {/* <Card.Img style={{height:'180px'}} variant="top" src={urlToImage} /> */}
      <Card.Body style={{   display: "flex",flexDirection: "column",
    justifyContent: "space-between",}}>
        <div style={{fontSize:"1.2rem",textAlign:"left"}}>Orphanage:<br/>{organization}</div>
        <div style={{fontSize:"1rem",textAlign:"left"}}>
         Address: {address}
        </div>
       
      </Card.Body>
      
    </Card>
  );
}

export default Box;