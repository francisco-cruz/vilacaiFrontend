import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure, Button, Tr, Td } from "@chakra-ui/react";
import api from "../../services/api";
import ModalAdminDel from "../modal/modalAdminDel";

const RecheioAdmin = ({ id, name, setFillings }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getAllFillings = async () => {
    const response = await api.get("/fillings");
    setFillings(response.data.fillings);
  };


  const deleteFilling = (id) => {
    api
      .delete("/fillings", {
        data: {
          id: id,
        },
      })
      .then((res) => {
        console.log("Product removed with success");
        if (res.status >= 200 && res.status <= 299) {
          console.log("Produt removed with success!");
          getAllFillings();
        } else throw new Error(res);
      })
      .catch((err) => {
        console.log(err.message);
        throw new Error(err);
      });
  };

  return (
    <>
      <Tr key={id}>
        <Td display="flex" alignItems="center" justifyContent="space-between">
          <Link to={`/admin/editFilling/${id}`}>{name}</Link>
          <div className="buttons-table">
            <Link to={`/admin/editFilling/${id}`}>
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
              deleteData={deleteFilling}
            />
        </Td>
      </Tr>
    </>
  );
};

export default RecheioAdmin;
