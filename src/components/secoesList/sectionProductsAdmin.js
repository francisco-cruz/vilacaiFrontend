import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure, Button, Tr, Td } from "@chakra-ui/react";
import api from "../../services/api";
import ModalAdminDel from "../modal/modalAdminDel";

const SectionProductsAdmin = ({ id, name, setSections, form, setForm }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getSections = async () => {
    const response = await api.get("/sections");
    setSections(response.data.sections);
  };

  const deleteSection = async (id) => {
    await api
      .delete("/sections", {
        data: {
          id,
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          console.log("Section removed");
          getSections();
        } else throw new Error(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Tr key={id}>
        <Td display="flex" alignItems="center" justifyContent="space-between">
          <Link to={"/admin/editSectionProducts"}>{name}</Link>
          <div className="buttons-table">
            <Link to={"/admin/editSectionsProduct"}>
              <Button colorScheme="gray" onClick={() => setForm("edit")}>
                Editar
              </Button>
            </Link>
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
            deleteData={deleteSection}
          />
        </Td>
      </Tr>
    </>
  );
};

export default SectionProductsAdmin;
