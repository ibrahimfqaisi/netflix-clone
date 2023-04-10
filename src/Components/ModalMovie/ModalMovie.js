import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { useRef } from 'react';


export default function ModalMovie(params) {
    const commentRef = useRef();

    function submitHandler(e) {
        console.log();
        e.preventDefault();
        let userComment = commentRef.current.value;
        let newtrending = { ...params.trending, userComment } 
       params.commentHandler(newtrending, newtrending.id);

addToFavHandler(e)
    }


    async function addToFavHandler(e){
        e.preventDefault();
      
        let url =`${process.env.REACT_APP_URL}/addMovie`;
        
        let data={
          title:params.trending.title,
          poster_path : params.trending.poster_path,
          overviewAndComments  : params.trending.userComment
      
        }
        const response = await fetch (url,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      
        const receivedData = await response.json();
        console.log(1111,receivedData)
      
        if (response.status ===201){
          alert("successfully added to database")
        }
      
      
      }
      


    return (<Modal show={params.show} onHide={params.handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>add to the favorite list</Modal.Title>
        </Modal.Header>
        <img src={`https://image.tmdb.org/t/p/w500${params.trending.poster_path}`} alt={params.trending.title} />
        <Modal.Body><h4>{params.trending.title}</h4></Modal.Body>
        {params.trending.userComment ? params.trending.userComment
 : "No comment Added "}

        <Form>
            <Form.Group className="form" controlId="formBasicEmail">
                <Form.Label>Add a comment</Form.Label>
                <Form.Control ref={commentRef} type="text" placeholder="Enter your comment " />
                <Form.Text className="text-muted">enter your comment !!</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                add to movie
            </Button>

        </Form>
        <Modal.Footer>
            <Button variant="secondary" onClick={params.handleClose}>
                Close
            </Button>
        
        </Modal.Footer>
    </Modal>)

}
