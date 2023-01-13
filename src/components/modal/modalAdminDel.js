import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import api from "../../services/api";

const ModalAdminDel = ({
  id,
  name,
  isOpen,
  onClose,
  deleteData,
}) => {

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confimar ação</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <Text fontSize="18px" px={5}>
            Deseja excluir {name}?
          </Text>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={() => deleteData(id)}>
              Excluir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAdminDel;
