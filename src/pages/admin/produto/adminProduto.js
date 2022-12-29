import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";
import { Heading } from "@chakra-ui/react";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function Products() {
  const [allProdutos, setAllProdutos] = useState([]);

  useEffect(() => {
    async function getAllProdutos() {
      const response = await api.get("/products");
      setAllProdutos(response.data.products);
    }

    getAllProdutos();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <Heading textAlign="center" mt={10}>
        Produtos
      </Heading>
      <Link to={"/createProduto"}>
        <button className="btn-adicionar">Adiconar</button>
      </Link>

      <TableContainer mt={10}>
        <Table variant="striped" colorScheme="purple">
          <Thead>
            <Tr>
              <Th>Administração</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allProdutos.map((produto) => (
              <Tr>
                <Td
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to={""}>{produto.name}</Link>
                  <div className="buttons-table">
                    <Button colorScheme='gray'>Editar</Button>
                    <button className="btn-excluir">Excluir</button>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
