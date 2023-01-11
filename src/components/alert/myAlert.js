import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
} from "@chakra-ui/react";

function MyAlert({ status, message }) {
  return (
    <>
      <Alert status={status}>
        <AlertIcon />
        <Box>
          <AlertTitle>{status}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
        <CloseButton />
      </Alert>
    </>
  );
}
export default MyAlert;
