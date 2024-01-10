import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    // <ul>
    //   {games.map((game) => (
    //     <li key={game.id}>{game.name}</li>
    //   ))}
    // </ul>
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
