import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

const AddCommentsNoModal = ({ asin }) => {
  const [formData, setFormData] = useState({ comment: "", rate: "" });

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const isFormValid = () => {
    const { comment, rate } = formData;
    const commentLenght = comment.length;
    const rateLenght = rate.length;

    if (commentLenght > 0 && rateLenght > 0) {
      return true;
    }

    return false;
  };

  const postComment = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODM4ODAxMjUsImV4cCI6MTY4NTA4OTcyNX0.ymLMEk_fdw9F-obdXJcnkHgswvnV3VHznmbCeoWC0XA",
          },
          body: JSON.stringify(formData),
        }
      );

      formRef.current.reset();

      if (response.ok) {
        setLoading(false);
        alert("Comment added!");

        postComment("");
      } else {
        console.log("Error");
        alert("Error");
      }
    } catch (error) {
      console.log(error);
      alert("Error catch");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      <h4 className="mt-5">Add comment</h4>
      <Form ref={formRef} onSubmit={postComment}>
        <Form.Control
          as="textarea"
          rows="3"
          name="comment"
          onChange={(e) =>
            setFormData({
              ...formData,
              comment: e.target.value,
              elementId: asin,
            })
          }
        />
        <Form.Select
          className="mt-3"
          name="rate"
          onChange={(e) => {
            console.log(e.target.value);
            setFormData({
              ...formData,
              rate: e.target.value,
            });
          }}
        >
          <option>Cast a vote</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <button
          className="btn btn-primary mt-3"
          disabled={!isFormValid()}
          type="submit"
        >
          Send
        </button>
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Form>
    </>
  );
};

export default AddCommentsNoModal;
