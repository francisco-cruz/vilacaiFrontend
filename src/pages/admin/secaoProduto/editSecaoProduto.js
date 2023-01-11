import MyAlert from "../../../components/alert/myAlert";
import FormSectionProducts from "../../../components/forms/formSectionProducts";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import api from "../../../services/api";

function EditRecheio() {
  const update = async () => {
   await api
      .put("/sections", {
        name: "",
      })
      .then((res) => {
        console.log("Section update with success");
        if (res.status >= 200 && res.status <= 299) {
          console.log("Section update with success!");
          <MyAlert status="success" message="Seção Atualizada com Sucesso" />;
        } else throw new Error(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return (
    <>
      <HeaderAdmin />
      <FormSectionProducts
        title="Editar Seção"
        id=""
        placeholder="Nome da Seção"
        value=""
        save={update}
        textButton="Salvar Alterações"
      />
    </>
  );
}

export default EditRecheio;
