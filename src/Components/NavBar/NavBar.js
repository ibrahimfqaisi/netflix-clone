
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
export default function NavBar(params) {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            
            <Nav className="me-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/FavList">fav-Recipes</Nav.Link>

            </Nav>
        </Container>
    </Navbar>
    )
}