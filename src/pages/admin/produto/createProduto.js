import {
  Input,
  Text,
  Button,
  Stack,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import api from "../../../services/api";
import FormData from "form-data";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";

export default function CreateProduct() {
  const save = async () => {
    let data = new FormData();
    // const name = document.querySelector("#name").value;
    // const price = document.querySelector("#price").value;
    const image = document.querySelector("#image").files[0];
    data.append("file", image, image.name);

    await api
      .post("/images", data, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <HeaderAdmin />
      <Heading textAlign="center" mt={10}>
        Novo Produto
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
          <Button mt={5} w="100%" colorScheme="green" onClick={save}>
            Criar Produto
          </Button>
        </form>
      </Stack>
    </>
  );
}
