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
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import SectionProductsAdmin from "../../../components/secoesList/sectionProductsAdmin";

export default function SectionsProduct() {
  const [sections, setSections] = useState([]);
  const [form, setForm] = useState("create");

  const getSections = async () => {
    const response = await api.get("/sections");
    setSections(response.data.sections);
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <Stack mt={10} mx={5} alignItems={"flex-end"}>
        <Link to={"/admin/createSectionsProduct"}>
          <Button colorScheme="green">Adiconar</Button>
        </Link>
      </Stack>
      <Stack mx={5}>
        <TableContainer mt={5}>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Seções de Produtos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sections.map((section) => {
                return (
                  <SectionProductsAdmin
                    key={section.id}
                    {...section}
                    sections={sections}
                    setSections={setSections}
                    form={form}
                    setForm={setForm}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
