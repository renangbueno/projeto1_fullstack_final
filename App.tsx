import { AppProvider } from "./contexts/AppContext";
import Form from "./components/Form";
import Result from "./components/Result";
import ErrorMessage from "./components/ErrorMessage";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

function Content() {
  const { loading } = useContext(AppContext);

  return (
    <>
      <h1>Descubra a idade do seu nome</h1>
      <Form />
      {loading && <p>Buscando..</p>}
      <ErrorMessage />
      <Result />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
}