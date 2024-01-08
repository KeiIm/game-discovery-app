import { Grid, GridItem, Show } from '@chakra-ui/react';

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
        <GridItem area="nav" bg="tomato">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="papayawhip">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="gold">
          Main
        </GridItem>
      </Grid>
      <nav></nav>
      <aside></aside>
      <main></main>
    </>
  );
}

export default App;
