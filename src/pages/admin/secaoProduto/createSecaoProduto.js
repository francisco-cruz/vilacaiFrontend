import api from "../../../services/api";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import MyAlert from "../../../components/alert/myAlert";
import { Heading, Stack, Text, Button, Input } from "@chakra-ui/react";

export default function CreateProduct() {
  const save = async () => {
    const name = document.querySelector("#sectionProductNameCreate").value;
    await api
      .post("/sections", {
        name: name,
      })
      .then((res) => {
        console.log("Section created with success");
        if (res.status >= 200 && res.status <= 299) {
          console.log("Section created with success!");
          <MyAlert status="success" message="Seção Criada com Sucesso" />;
        } else throw new Error(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <>
      <>
      <HeaderAdmin />
      <Heading textAlign="center" mt={10}>
        Adiconar Seção
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
          <Input id="sectionProductNameCreate" />
          <Button mt={5} w="100%" colorScheme="green" onClick={save}>
            Salvar Alterações
          </Button>
        </form>
      </Stack>
    </>
    </>
  );
}
