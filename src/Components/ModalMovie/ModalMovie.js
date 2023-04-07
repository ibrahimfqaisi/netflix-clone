import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function ModalMovie(params) {
    return (<Modal show={params.show} onHide={params.handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>add to the favorite list</Modal.Title>
        </Modal.Header>
        <img src={`https://image.tmdb.org/t/p/w500${params.trending.poster_path}`} alt={params.trending.title} />
            <Modal.Body><h4>{params.trending.title}</h4></Modal.Body>
        <label for="comment">add a comment :</label>
        <input type="text" id="comment" name="comment" placeholder="Enter your comment here" maxlength="100"/>

            <Modal.Footer>
                <Button variant="secondary" onClick={params.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={params.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
    </Modal>)

}
