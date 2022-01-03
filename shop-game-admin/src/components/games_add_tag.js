import React,{useState} from 'react';
import { Button, Table,Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
const Tag = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button onClick={handleShow} className="selected-btn" variant="secondary" style={{width:'10rem'}}>
            Tag details  
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Tag list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="secondary" style={{float:'right', marginBottom:'1rem'}}>Thêm</Button>
            <Table bordered hover responsive="sm" className="listgame-details">
            <thead>
                <tr>
                <th></th>
                <th>Tags name</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Action</td>
                <td>
                    <button><FaTrash/></button>
                </td>
            </tr>
            </tbody>  
            </Table>
            </Modal.Body>
        </Modal>  
        </>                                                              
    )
}
export default Tag;