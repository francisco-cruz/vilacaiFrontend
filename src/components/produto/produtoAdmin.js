import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure, Button, Tr, Td } from "@chakra-ui/react";
import api from "../../services/api";
import ModalAdminDel from "../modal/modalAdminDel";

const ProductAdmin = ({ id, name, setProducts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <>
      <Tr key={id}>
        <Td display="flex" alignItems="center" justifyContent="space-between">
          <Link to={"/admin/editProduct"}>{name}</Link>
          <div className="buttons-table">
            <Link to={"/admin/editProduct"}>
              <Button colorScheme="gray">Editar</Button>
            </Link>
            {/* <Button colorScheme="red" onClick={onOpen}> */}
            <Button colorScheme="red" onClick={onOpen}>
              Excluir
            </Button>
          </div>
            <ModalAdminDel
              id={id}
              name={name}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              deleteData={deleteProduct}
            />
        </Td>
      </Tr>
    </>
  );
};

export default ProductAdmin;
