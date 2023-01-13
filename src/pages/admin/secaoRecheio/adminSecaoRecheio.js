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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";
import RecheioAdmin from "../../../components/recheio/recheioAdmin";


export default function SectionsFillings() {
  const [fillings, setFillings] = useState([]);

  const getAllFillings = async () => {
    const response = await api.get("/fillings");
    setFillings(response.data.fillings);
  };

  useEffect(() => {
    getAllFillings();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <Stack mt={10} mx={5} alignItems={"flex-end"}>
        <Link to={"/admin/createFilling"}>
          <Button colorScheme="green">Adiconar</Button>
        </Link>
      </Stack>
      <Stack mx={5}>
        <TableContainer backgroundColor="white" mt={5}>
          <Table variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Seções de Recheio</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {fillings.map((fillings) => {
                return (
                  <RecheioAdmin
                    key={fillings.id}
                    {...fillings}
                    fillings={fillings}
                    setFillings={setFillings}
                  />
                );
              })} */}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
