import { useNavigate, useParams } from "react-router-dom";

import Form from "./Form";

export default function ShowsForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (id) {
    return <Form method="PUT" id={id} navigate={navigate} />;
  } else {
    return <Form method="POST" navigate={navigate} />;
  }
}