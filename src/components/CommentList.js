import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RatingSystem from "..//components/RatingSystem";

const CommentList = ({ comments }) => {
  if (!comments) {
    return <p>There are no reviews at the moment.</p>;
  }
  return (
    <>
      <ListGroup className="my-4">
        {comments.slice(-10).map((comment, id) => (
          <ListGroup.Item key={id}>
            <p className="mb-0">{comment.comment}</p>
            <small>
              Rating:
              <RatingSystem stars={comment.rate} />
            </small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CommentList;
