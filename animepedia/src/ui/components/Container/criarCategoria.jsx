import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../data/services/ApiService";
import { Container } from "reactstrap";

function CriarAnime() {
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
      subtitulo: data.subtitulo,
      categoria: data.categoria,
      data_lancamento: data.date,
      autor: data.autor,
      duracao: data.duracao,
      genero: data.genero,
      onde_assistir: data.assistir,
      comentario: data.comentario,
      image: data.image,
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

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Subtítulo</Form.Label>
                <Form.Control 
                type="text"
                {...register("subtitulo", {
                    required: "Subtítulo obrigatório",
                  })}
                   />
              </Form.Group>
            </Row>
            <Row className="mb-3">
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
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Data de Lançamento</Form.Label>
                <Form.Control 
                type="date" 
                {...register("data_lancamento", {
                    required: "Data obrigatória",
                  })}
                  />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Autor</Form.Label>
                <Form.Control 
                type="text" 
                {...register("autor", {
                    required: "Autor obrigatório",
                  })}
                  />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Status</Form.Label>
                <Form.Control 
                type="text" 
                {...register("categoria", {
                    required: "Categoria obrigatório",
                  })}
                  />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Duração</Form.Label>
                <Form.Control 
                type="text" 
                {...register("duracao", {
                    required: "Duração obrigatória",
                  })}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gênero</Form.Label>
                <Form.Select 
                defaultValue="Choose..."
                {...register("genero", {
                    required: "Gênero obrigatório",
                  })}
                  >
                  <option>Ação/Aventura</option>
                  <option>Romance</option>
                  <option>Terror</option>
                  <option>Esporte</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Onde Assistir</Form.Label>
              <Form.Control 
              type="text" 
              {...register("onde_assistir", {
                required: "Categoria obrigatório",
              })}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comentário</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              {...register("comentario", {
                required: "Comentário obrigatório",
              })}/>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Selecione uma imagem</Form.Label>
                <Form.Control 
                type="file" 
                {...register("image", {
                    required: "Imagem obrigatória",
                  })}/>
              </Form.Group>
            </Row>
            <Button
              variant="outline-light"
              type="submit"
              className="botao-post  mb-4"
            >
              Enviar
            </Button>
          </Form>
    </>
  );
}

export default CriarAnime;
