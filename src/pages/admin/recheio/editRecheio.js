import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";

function EditFilling() {
  const { id } = useParams();
  const [filling, setFilling] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getFilling = () => {
    api
      .get(`/fillings/show/${id}`)
      .then((res) => {
        console.log(res.data.filling);
        if (res.status >= 200 && res.status <= 299) {
          setFilling(res.data.filling);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  useEffect(() => {
    getFilling();
  }, []);

  // if (isLoading) return <h1>Carregando...</h1>;

  // if (isError) return <h1 style={{ color: "red" }}>Erro...</h1>;

  return (
    <>
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
            <Input
              id="nameFilling"
              placeholder="Nome do recheio"
              mb="8px"
              // defaultValue={filling.name}
            />

            <Text mb="8px">Preço</Text>
            <NumberInput
              id="priceFilling"
              mb={5}
              defaultValue={0.0}
              step={0.05}
              // value={filling.price}
            >
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
              {/* <Switch id="fillingAvailable" defaultValue={filling.avaliable} /> */}
            </FormControl>
            <Button mt={5} w="100%" colorScheme="green">
              {/* onClick={save} */}
              Adicionar Recheio
            </Button>
          </form>
        </Stack>
      </>
    </>
  );
}

export default EditFilling;
