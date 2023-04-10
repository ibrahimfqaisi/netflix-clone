import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from 'react';


export default function FavList(params) {

  const [favmovie, setFavmovie] = useState([]);

  async function getFavMovie() {
    let url = `${process.env.REACT_APP_URL}/getMovies`;

    let response = await fetch(url, {
      method: 'GET',
    })

    let favorite = await response.json();
    setFavmovie(favorite)

  }

  const updateRef = useRef();

  // function submitHandler(e, id, title, overviewandcomments, poster_path) {
  //   e.preventDefault();
  //   let newComment = updateRef.current.value;
  //   UpdateHandler(e, id, title, newComment, poster_path)
  // }
  function submitHandler(e, id, title, overviewandcomments, poster_path) {
    e.preventDefault();
    
    if (updateRef.current) {
      let NewComment = updateRef.current.value;
      console.log(id, title, NewComment, poster_path);
  
      UpdateHandler(e, id, title, NewComment, poster_path);
    } else {
      console.log('updateRef.current is null or undefined');
    }
  }

  async function UpdateHandler(e, id, title, newComment, poster_path) {
    e.preventDefault();

    let url = `${process.env.REACT_APP_URL}/UPDATE/${id}`;

    let data = {
      title: title,
      poster_path: poster_path,
      overviewAndComments: newComment
    }

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const receivedData = await response.json();

    if (response.status === 200) {
      getFavMovie();
    }
  }

  async function handleDelete(id) {
    let url = `${process.env.REACT_APP_URL}/DELETE/${id}`;

    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 204) {
      getFavMovie();
    }
  }

  useEffect(() => {
    getFavMovie();
  }, [])

  return (
    <>
      {
        favmovie && favmovie.map(favmovie => {
          return (
            <Card key={favmovie.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${favmovie.poster_path}`} />
              <Card.Body>
                <Card.Title>{favmovie.title}</Card.Title>
                <Card.Text>{favmovie.overviewandcomments}</Card.Text>
                <Form >
                  <Form.Group className="form" controlId="formBasicEmail">
                    <Form.Label>Update your comment</Form.Label>
                    <Form.Control ref={updateRef} type="text" placeholder="Update your comment" />
                    <Form.Text className="text-muted">Enter your updated comment!</Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={(e) => submitHandler(e, favmovie.id, favmovie.title, favmovie.overviewandcomments, favmovie.poster_path)}>
                    Update
                  </Button>
                </Form>
                <Button variant="primary" onClick={() => handleDelete(favmovie.id)}>Delete</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
}
