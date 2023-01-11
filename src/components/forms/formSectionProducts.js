import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";

function FormSectionProducts({
  title,
  id,
  placeholder,
  value,
  save,
  textButton,
}) {
  return (
    <>
      <Heading textAlign="center" mt={10}>
        {title}
      </Heading>
      <Stack
        mt={10}
        px={5}
        maxWidth="800px"
        position="relative"
        left="50%"
        transform="translateX(-50%)"
      >
        <form>
          <Text mb="8px">Nome</Text>
          <Input id={id} placeholder={placeholder} value={value} />
          <Button mt={5} w="100%" colorScheme="green" onClick={save}>
            {textButton}
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default FormSectionProducts;
