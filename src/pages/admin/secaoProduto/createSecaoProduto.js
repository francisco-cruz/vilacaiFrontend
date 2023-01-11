import api from "../../../services/api";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin";
import MyAlert from "../../../components/alert/myAlert";
import FormSectionProducts from "../../../components/forms/formSectionProducts";
export default function CreateProduct() {
  const save = async () => {
    const name = document.querySelector("#sectionProductName").value;
    await api
      .post("/sections", {
        name: name,
      })
      .then((res) => {
        console.log("Section created with success");
        if (res.status >= 200 && res.status <= 299) {
          console.log("Section created with success!");
          <MyAlert status="success" message="Seção Criada com Sucesso" />;
        } else throw new Error(res);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <>
      <HeaderAdmin />
      <FormSectionProducts
        title="Nova Seção"
        id=""
        placeholder="Nome da Seção"
        value=""
        save={save}
        textButton="Adicionar Seção"
      />
    </>
  );
}
