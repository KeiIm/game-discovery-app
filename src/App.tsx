import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <>
      {/* Chakra Responsive Styles */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // mobile
          lg: `"nav nav" "aside main"`, // 1024px
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
      <nav></nav>
      <aside></aside>
      <main></main>
    </>
  );
}

export default App;
