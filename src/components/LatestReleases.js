import { Container, Row, Col } from "react-bootstrap";
import "../Styles/bookCard.css";
import MyBadge from "./MyBadge";
import SingleCard from "./SingleCard";
import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import CommentsNoModal from "./CommentsNoModal";

const LatestReleasePage = () => {
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(false); // loading inizializzato a false

  const [error, setError] = useState(null); //  error inizializzato a null

  const [books, setBooks] = useState([]); //  books inizializzato con un array vuoto
  //console.log(books);

  const [renderBooks, setRenderBooks] = useState([]); // renderBooks inizializzato con un array vuoto

  const [selected, setSelected] = useState("");

  const getBooks = async () => {
    setLoading(true); //  loading  true per inizio del caricamento
    try {
      const data = await fetch("https://epibooks.onrender.com/");
      const response = await data.json();
      setBooks(response); // aggiorna lo stato books con i libri response
      setRenderBooks(response); // aggiorna lo stato renderBooks con i libri response
      setLoading(false); // loading  false per indicare la fine del caricamento
    } catch (error) {
      if (error) {
        setError("Errore durante ricezione dei dati");
      }
    }
  };

  useEffect(() => {
    //  componente  montato
    getBooks(); // funzione getBooks per ottenere i libri
  }, []);

  return (
    <>
      <Container
        className="main-container"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        {error && <h1 className="text-danger">{error}</h1>}
        {loading && !error && <ClipLoader />}
        {!loading && !error && (
          <div>
            <h2 className="text-center mb-5">Latest Arrivals</h2>
            <SearchBar
              books={books}
              setBooks={setBooks}
              setRenderBooks={setRenderBooks}
            />{" "}
            {/* passa i libri e le funzioni di aggiornamento come proprietà alla componente SearchBar */}
            <MyBadge str="Fantasy" color="secondary" />
            <Container>
              <Row className="">
                <Col className="d-flex flex-wrap gap-2 mb-5" lg={8}>
                  {renderBooks &&
                    renderBooks.map((book) => (
                      <SingleCard
                        key={book.asin}
                        title={book.title}
                        img={book.img}
                        author={book.author}
                        price={book.price}
                        asin={book.asin}
                        category={book.category}
                        setSelected={setSelected}
                        selected={selected === book.asin}
                      />
                    ))}
                </Col>
                <Col>
                  <CommentsNoModal book={selected} />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Container>
    </>
  );
};

export default LatestReleasePage;

//Codice per es. D5 II parte

//class LatestReleases extends React.Component {
//state = {
// selected: null,
//};

//handleCardClick = (asin) => {
// this.setState({ selected: asin });
// };

//render() {
// const { books } = this.props;

//return (
// <div>
//   {books.map((book) => (
//   <SingleBook
//key={book.asin}
// book={book}
//selected={this.state.selected === book.asin}
// onClick={() => this.handleCardClick(book.asin)}
///>
// ))}
// </div>
// );
// }
// }

//const SingleBook = ({ book, selected, onClick }) => {
// return (
//<div>
//  <Card onClick={onClick} className={`${selected ? "border border-danger shadow" : null}`}>
/* Card content..... */
// </Card>
//</div>
// );
// };
