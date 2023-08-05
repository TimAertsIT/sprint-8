import { StyledImg, StyledH2, StyledDiv } from "./FilmDetails.styles";

const FilmDetails = ({ starship, onClick }) => {
    if (starship.films.length === 0) {
        return null;
    }
    return (<> <StyledDiv>
        <StyledH2>Films: </StyledH2>
        {starship.films.map(film => {
            const filmId = film.split("/").filter(Boolean).pop();
            const filmImageUrl = `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;
            return <StyledImg src={filmImageUrl} alt="Film" />;
        })}
    </StyledDiv>
    </>
    );
};

export default FilmDetails;