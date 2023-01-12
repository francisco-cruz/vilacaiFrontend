import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import MyAlert from "../../../components/alert/myAlert";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";
import axios from "axios";

function EditRecheio() {
  const { id } = useParams();
  const { section, setSection } = useState();

  // const getSection = () => {
  //   api.get("/sections/show", {
  //       data: {
  //         id
  //       }}).then((res) => {
  //       if(res.status >= 200 && res.status <= 299)
  //         console.log(res.data);
  //       else
  //         throw Error(res.status)
  //     }).catch((err) => {
  //       throw Error(err.message);
  //     });
  //     // setSection(response.data)
  // };

  axios.get("http://127.0.0.1:3333/sections/show", {
  data: {
      id: 19
  }}).then((res) => {
  console.log(res.data);
    }).catch(err => console.log(err));


  // const update = async () => {
  //   const newName = document.querySelector("#inputEditSectionProducts").value;

  //   await api
  //     .put(`/sections/${id}`, {
  //       name: newName,
  //     })
  //     .then((res) => {
  //       console.log("Section update with success");
  //       if (res.status >= 200 && res.status <= 299) {
  //         console.log("Section update with success!");
  //         <MyAlert status="success" message="Seção Atualizada com Sucesso" />;
  //       } else throw new Error(res);
  //     })
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // };

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
          <Input />
          <Button mt={5} w="100%" colorScheme="green">
            Salvar Alterações
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default EditRecheio;
