import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";
import {
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function SectionsProduct() {
  const [allSecoes, setAllSecoes] = useState([]);

  async function getAllSecoes() {
    const response = await api.get("/sections");
    setAllSecoes(response.data.sections);
  }

  const removeSection = async (id) => {
    await api
      .delete("/sections", {
        data: {
          id,
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          console.log("Section removed");
          getAllSecoes();
        } else throw new Error(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllSecoes();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <Link to={"/admin/createProduct"}>
        <button className="btn-adicionar">Adiconar</button>
      </Link>

      <Stack px={5} shadow="md">
        <TableContainer mt={10}>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Produtos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allSecoes.map((section) => (
                <Tr key={section.id}>
                  <Td>
                    <Link to={""}>{section.name}</Link>
                    <div className="buttons-table">
                      <Button className="btn-editar">Editar</Button>
                      <Button
                        className="btn-excluir"
                        onClick={() => removeSection(section.id)}
                      >
                        Excluir
                      </Button>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  );
}
