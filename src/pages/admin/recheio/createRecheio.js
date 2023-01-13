import {
  Button,
  Text,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";

function CreateRecheio() {
  const saveFilling = async () => {
    const name = document.querySelector("#nameFilling").value;
    const price = document.querySelector("#priceFilling").value;
    const avaliable = document.querySelector("#fillingAvailable").checked;

    await api
      .post("/fillings", {
        name: name,
        available: avaliable,
        price: price,
      })
      .then((res) => {
        console.log("Filling created with success");
        if (res.status >= 200 && res.status <= 299) {
          console.log("Filling created with success!");
          // <MyAlert status="success" message="Seção Criada com Sucesso" />;
        } else throw new Error(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <>
      <HeaderAdmin />
      <Heading textAlign="center" mt={10}>
        Novo Recheio
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
          <Input id="nameFilling" placeholder="Nome do recheio" mb="8px" />

          <Text mb="8px">Preço</Text>
          <NumberInput id="priceFilling" mb={5} defaultValue={0.0} step={0.05}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="isChecked" mb="0">
              Recheio disponivel?
            </FormLabel>
            <Switch id="fillingAvailable" defaultChecked />
          </FormControl>
          <Button mt={5} w="100%" colorScheme="green" onClick={saveFilling}>
            {/* onClick={save} */}
            Adicionar Recheio
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default CreateRecheio;
