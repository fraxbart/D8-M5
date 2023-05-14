import React, { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";
//import CommentsModal from "../components/CommentsModal";
import { Link } from "react-router-dom";

const SingleCard = ({
  asin,
  title,
  author,
  category,
  price,
  img,
  setSelected,
  selected,
}) => {
  //const [selected, setSelected] = useState(false) // variabile di stato selected inizializzata a false
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // variabile di stato isCommentModalOpen inizializzata a false

  //const toggleSelected = () => setSelected(!selected) //  funzione toggleSelected che inverte il valore della variabile selected
  const toggleModal = () => setIsCommentModalOpen(!isCommentModalOpen); // a funzione toggleModal che inverte il valore della variabile isCommentModalOpen

  return (
    <div>
      <Card
        className={`${selected ? "border border-danger shadow" : null}`}
        style={{ width: "18rem" }}
        onClick={() => setSelected(asin)}
      >
        <Card.Img
          className="object-fit-cover w-100 book-card"
          variant="top"
          src={img}
          alt={title}
        />
        <Card.Body key={asin}>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Subtitle className="mb-2">{author}</Card.Subtitle>
          <Card.Text className="mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Card.Text>
          <Card.Text className="mb-4">Euro {price}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button className="mx-1 my-1 px-1 py-1" onClick={toggleModal}>
              Comments
            </Button>
            <Link to={`/book/${asin}`}>
              <Button className="mx-1 my-1 px-1 py-1">Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
      {/*isCommentModalOpen && <CommentsModal toggleModal={toggleModal} asin={asin}/>*/}{" "}
      {/* visualizza il modale  se isCommentModalOpen è true */}
    </div>
  );
};

export default SingleCard;
