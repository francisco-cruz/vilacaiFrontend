import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";
import ProductAdmin from "../../../components/produto/produtoAdmin";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Stack,
} from "@chakra-ui/react";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllProdutos = async () => {
    const response = await api.get("/products");
    setProducts(response.data.products);
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
        <TableContainer backgroundColor="white" mt={5}>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Produtos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => {
                return <ProductAdmin key={product.id} {...product} products={products} setProducts={setProducts} />
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}