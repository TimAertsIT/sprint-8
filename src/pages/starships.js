import Starships from "../components/Starships/Starships";
import StarshipsDetails from "../components/StarshipsDetails/StarshipsDetails";
import { ButtonBackground, StyledButton } from "../App.styles";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";


const StarshipsPage = ({
  starships,
  selectedStarship,
  hasMore,
  handleLoadMore,
  handleStarshipClick,
  handleDetailsClick
}) => {
  return (
    <div>
      {selectedStarship ? (
        <StarshipsDetails starship={selectedStarship} onClick={handleDetailsClick} />
      ) : (
        <>
          <Header />
          <Layout />
          {starships.map(starship => (
            <Starships key={starship.name} name={starship.name} model={starship.model} onClick={() => handleStarshipClick(starship)} />
          ))}
        </>
      )}
      {!selectedStarship && hasMore && (
        <ButtonBackground>
          <StyledButton onClick={handleLoadMore}>Load more</StyledButton>
        </ButtonBackground>
      )}
    </div>
  );
}

export default StarshipsPage;