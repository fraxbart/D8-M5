import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RatingSystem from "./RatingSystem";
import { nanoid } from "nanoid";
import AddCommentsNoModal from "./AddCommentsNoModal";
import Container from "react-bootstrap/Container";

const CommentNoModal = ({ book }) => {
  console.log(book);
  const [comments, setComments] = useState([]);

  const getSingleBookComments = async () => {
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${book}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODM1NjUzMTMsImV4cCI6MTY4NDc3NDkxM30.wbU16bXEZFFqv9NlLVJMK1evBd_sZYrdDfnNvGc3cyo",
          },
        }
      );
      const response = await data.json();
      setComments(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODM1NjUzMTMsImV4cCI6MTY4NDc3NDkxM30.wbU16bXEZFFqv9NlLVJMK1evBd_sZYrdDfnNvGc3cyo",
          },
        }
      );
      // Dopo la cancellazione, aggiorna i commenti togliendo quello/i eliminati//
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSingleBookComments();
  }, [book]);

  return (
    <>
      <ListGroup>
        {book.length > 0 &&
          comments.map((comment) => (
            <ListGroup.Item
              key={nanoid()}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div>{comment.comment}</div>
                <div>Related to the book: {comment.elementId}</div>
              </div>

              <RatingSystem stars={comment.rate} />
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => deleteComment(comment._id)}
              >
                Delete
              </button>
            </ListGroup.Item>
          ))}
      </ListGroup>
      <Container>
        <AddCommentsNoModal asin={book} />
      </Container>
    </>
  );
};

export default CommentNoModal;
