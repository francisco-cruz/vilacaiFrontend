import { Link } from "react-router-dom";
import {
  Button,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";

function Admin() {
  return (
    <>
    <HeaderAdmin/>
      <Stack px={5}>
        <TableContainer mt={10}>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Administração</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to={"/admin/products"}>Produtos</Link>
                  <Link to={"/admin/createProduct"}>
                    <Button colorScheme="green">Adicionar</Button>
                  </Link>
                </Td>
              </Tr>
              <Tr>
                <Td
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to={"/admin/sectionsProduct"}>Seção de Produtos</Link>
                  <Link to={"/admin/createSectionsProduct"}>
                    <Button colorScheme="green">Adicionar</Button>
                  </Link>
                </Td>
              </Tr>
              <Tr>
                <Td
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to={"/admin/fillings"}>Recheios</Link>
                  <Link>
                    <Button colorScheme="green">Adicionar</Button>
                  </Link>
                </Td>
              </Tr>
              <Tr>
                <Td
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to={"/admin/sectionsFillings"}>Seção de Recheios</Link>
                  <Link>
                    <Button colorScheme="green">Adicionar</Button>
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}

export default Admin;
