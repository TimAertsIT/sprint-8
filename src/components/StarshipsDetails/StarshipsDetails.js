import PilotDetails from '../PilotDetails/PilotDetails';
import FilmDetails from '../FilmDetails/FilmDetails';
import { Background, StyledH1, StyledH2, GreyText, StyledImage, TwoColumns, OneColumn } from './StarshipsDetails.styles';

const StarshipsDetails = ({ starship, onClick }) =>
    { 
    const id = starship.url.split('/').filter(Boolean).pop();
    const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    const defaultImageUrl = 'https://starwars-visualguide.com/assets/img/starships/5.jpg';
    const handleImageError = (e) => {e.target.src = defaultImageUrl;};
    
        return (
        <Background onClick={onClick}>
            <StyledH1>{starship.name}</StyledH1>
            <StyledImage src={imageUrl} alt={starship.name} onError={handleImageError} />
            <OneColumn>
            <StyledH2>MODEL: <GreyText>{starship.model}</GreyText></StyledH2>
            <StyledH2>STARSHIP CLASS: <GreyText>{starship.starship_class}</GreyText></StyledH2>
            <StyledH2>MANUFACTURER: <GreyText>{starship.manufacturer}</GreyText></StyledH2>
            <StyledH2>COST: <GreyText>{starship.cost_in_credits}</GreyText></StyledH2>
            </OneColumn>
            <TwoColumns>
            <StyledH2>CREW: <GreyText>{starship.crew}</GreyText></StyledH2>
            <StyledH2>LENGTH: <GreyText>{starship.length}</GreyText></StyledH2>
            </TwoColumns>
            <TwoColumns>
            <StyledH2>PASSENGER CAPACITY: <GreyText>{starship.passengers}</GreyText></StyledH2>
            <StyledH2>MAXIMUM ATMOSPHERING SPEED: <GreyText>{starship.max_atmosphering_speed}</GreyText></StyledH2>
            </TwoColumns>
            <TwoColumns>
            <StyledH2>CARGO CAPACITY: <GreyText>{starship.cargo_capacity}</GreyText></StyledH2>
            <StyledH2>HYPERDRIVE RATING: <GreyText>{starship.hyperdrive_rating}</GreyText></StyledH2>
            </TwoColumns>
            <TwoColumns>
            <StyledH2>CONSUMABLES: <GreyText>{starship.consumables}</GreyText></StyledH2>
            <StyledH2>MAXIMUM SPEED IN REALSPACE: <GreyText>{starship.MGLT}</GreyText></StyledH2>
            </TwoColumns>
            {starship && <PilotDetails starship={starship} onClick={onClick} />}
            {starship && <FilmDetails starship={starship} onClick={onClick} />}
        </Background> )
    }

    export default StarshipsDetails;