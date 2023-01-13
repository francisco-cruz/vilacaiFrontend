import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";

function EditSectionsProduct() {
  const { id } = useParams();
  const [section, setSection] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getSection = () => {
    api.get(`/sections/show/${id}`)
      .then((res) => {
        if(res.status >= 200 && res.status <= 299){
          setSection(res.data.section);
          setIsLoading(false);
        }else{
          setIsLoading(false);
          setIsError(true);
        }
      }).catch(err => {
        setIsError(true);
      })
  };

  useEffect(() => {
    getSection();
  }, []);

  if(isLoading)
    return <h1>Carregando...</h1>

  if(isError)
    return <h1 style={{color: "red"}}>Erro...</h1>

  return (
    <>
      <HeaderAdmin />
      <Heading textAlign="center" mt={10}>
        Editar Seção
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
          <Input defaultValue={section.name}/>
          <Button mt={5} w="100%" colorScheme="green">
            Salvar Alterações
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default EditSectionsProduct;
