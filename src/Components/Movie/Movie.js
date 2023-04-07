import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ModalMovie from "../ModalMovie/ModalMovie";
import {useState} from "react"
export default function Movie(params) {
  console.log(params.trending);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${params.trending.poster_path}`} alt={params.trending.title}/>
        <Card.Body>
          <Card.Title>{params.trending.title}</Card.Title>
          <Card.Text>{params.trending.release_date}</Card.Text>
          <Button variant="primary" onClick={handleShow} >add to the favorite list</Button>
        </Card.Body>
      </Card>
<ModalMovie show={show} handleClose={handleClose} trending={params.trending} />
    </>
  )
}