import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "../../styles/admin.css";
export default function HeaderAdmin() {
  return (
    <>
      <header>
        <h3>Olá, Vilaçaí.</h3>
        <Link to={"/"}>
          <Button colorScheme="yellow">Sair</Button>
        </Link>
      </header>
    </>
  );
}
