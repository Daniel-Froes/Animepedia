import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../data/services/ApiService";

function CriarPost() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const dados = {
      titulo: data.titulo,
      categoria: data.categoria,
      comentario: data.comentario,
      status: true,
    };

    ApiService(`usuarios`, {
      method: "POST",
      body: dados,
    })
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              {...register("titulo", {
                required: "Título obrigatório",
              })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              {...register("categoria", {
                required: "Categoria obrigatório",
              })}
            >
              <option>Anime</option>
              <option>Mangá</option>
              <option>Geral</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comentário</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("comentario", {
              required: "Comentario obrigatório",
            })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Selecione uma imagem</Form.Label>
            <Form.Control
              type="file"
              {...register("image", {
                required: "Imagem obrigatório",
              })}
            />
          </Form.Group>
        </Row>
        <Button
          variant="outline-light"
          type="submit"
          className="botao-post  mb-3"
        >
          Enviar
        </Button>
      </Form>
    </>
  );
}
export default CriarPost;
