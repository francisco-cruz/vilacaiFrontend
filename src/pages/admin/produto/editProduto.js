import {
  Button,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";

function EditProduto({id}) {

  return (
    <>
      <HeaderAdmin />
      <Heading textAlign="center" mt={10}>
        Editar Produto
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
          <Input id="name" placeholder="Nome do produto" />
          <Text mb="8px">Preço</Text>
          <NumberInput defaultValue={0.0} step={0.05}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text mb="8px">Imagem</Text>
          <Input id="image" type="file" accept="image/*" />
          <Button mt={5} w="100%" colorScheme="green">
            Salvar Alterações
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default EditProduto;
