//import React, { useEffect } from 'react';
//import { Button, Modal, Spinner } from 'react-bootstrap';
//import CommentList from '..//components/CommentList';
//import AddComment from '..//components/AddComment';
//import '..//Styles/commentsModal.css';
//import {commentsLoading, commentsError, arrayOfComments} from '../states/commentsState'
//import { useDispatch, useSelector } from 'react-redux';/* dispatch esegue azioni che sono in reducer, selector seleziona analiticamente lo stato che ci serve */
//import { getCommentsFromBook } from '../states/commentsState';

//const CommentsModal = ({ toggleModal, asin }) => {

// const dispatch = useDispatch()
// const loading = useSelector(commentsLoading)
// const error = useSelector(commentsError)
//const comments = useSelector(arrayOfComments)

//  useEffect(()=> {
//   dispatch(getCommentsFromBook())
// }, [dispatch])

// return (
//<div className="modal show comments-modal" style={{ display: 'block' }}>
//   <Modal.Dialog>
//    <Modal.Body>
//      {loading && ( //se loading è true, mostra uno spinner
//         <div className="d-flex justify-content-center align-items-center">
//            <Spinner animation="border" role="status">
//           </Spinner>
//       </div>
//   )}
//   {!loading && ( // se loading è false, mostra componenti
//       <>
//          <CommentList comments={comments} />
//           <AddComment asin={asin} />
//      </>
//  )}
// </Modal.Body>
// <Modal.Footer>
//   <Button onClick={toggleModal} variant="secondary">
//       Close
//  </Button>
// </Modal.Footer>
// </Modal.Dialog>
// </div>
// );
//};

//export default CommentsModal;
