import { StyledBackground, Styledh1, StyledImage, StyledSpan } from './NotFound.styles';

const NotFound = () => {
    return (
        <StyledBackground>
            <Styledh1>I am not your <StyledSpan> father </StyledSpan> URL you're looking for</Styledh1>
            <StyledImage src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/10/star-wars-darth-vader-2491295.jpg?tf=3840x" />
        </StyledBackground>
    )
}

export default NotFound;