import { StyledBackground, Styledh1, StyledButton, StyledImage } from './Home.styles';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <StyledBackground>
      <Styledh1>All of your starwar favorites now streaming on Disney+</Styledh1>
      <StyledImage src="https://wallpaperheart.com/wp-content/uploads/2018/04/star-wars-wallpapers093.jpg" />
      <Link to="Starships">
        <StyledButton>Check the starships</StyledButton>
      </Link>
    </StyledBackground>
  )
}

export default Home;