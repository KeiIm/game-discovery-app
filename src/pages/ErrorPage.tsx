import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();
  const invalidPage = isRouteErrorResponse(error);

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {invalidPage
            ? 'This page does not exist'
            : 'An unexpected error occurred.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
