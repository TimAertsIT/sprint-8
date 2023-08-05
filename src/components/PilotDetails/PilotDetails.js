import { StyledImg, StyledH2, StyledDiv } from "./PilotDetails.styles";

const PilotDetails = ({ starship, onClick }) => {
    if (starship.pilots.length === 0) {
        return null;
    }
    return (<> <StyledDiv>
        <StyledH2>Pilots: </StyledH2>
        {starship.pilots.map(pilot => {
            const pilotId = pilot.split("/").filter(Boolean).pop();
            const pilotImageUrl = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;
            return <StyledImg src={pilotImageUrl} alt="Pilot" />;
        })}
    </StyledDiv>
    </>
    );
};

export default PilotDetails;