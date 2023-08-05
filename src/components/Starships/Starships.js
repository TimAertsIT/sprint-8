import { Background } from './Starships.styles';

const Starships = ({ name, model, onClick }) => {
    return (
        <Background onClick={onClick}>
            <h2>{name}</h2>
            <p>{model}</p>
        </Background>)
}

export default Starships;