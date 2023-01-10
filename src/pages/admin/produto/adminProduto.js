import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
} from "@chakra-ui/react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllProdutos = async () => {
    const response = await api.get("/products");
    setProducts(response.data.products);
  };

  const deleteProduct = async (id) => {
    await api
      .delete("/products", {
        data: {
          id: id,
        },
      })
      .then((res) => {
        console.log("Product removed with success");
        if (res.status >= 200 && res.status <= 299) {
          console.log("Produt removed with success!");
          getAllProdutos();
        } else throw new Error(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getAllProdutos();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <Stack mt={10} mx={5} alignItems={"flex-end"}>
        <Link to={"/admin/createProduct"}>
          <Button colorScheme="green">Adiconar</Button>
        </Link>
      </Stack>
      <Stack mx={5}>
        <TableContainer mt={5}>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Produtos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Link to={"/admin/editProduct"}>{product.name}</Link>
                    <div className="buttons-table">
                      <Link to={"/admin/editProduct"}><Button colorScheme="gray">Editar</Button></Link>
                      <Button
                        colorScheme="red"
                        onClick={() => deleteProduct(product.id)}
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
    </>
  );
}
