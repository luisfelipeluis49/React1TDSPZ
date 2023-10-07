import Component01 from "./components/Component01";
import Component02 from "./components/Component02";
import Component03 from "./components/Component03";


export function App(){
  const linguagem = "JavaScript"

  const clicouBotao = () => {
    alert("alerta do pai")
  }
  return (
    <>
      <h1>Olá Mundo!!!</h1>
      <Component01/>
      <Component02/>
      <Component03 linguagemPai={linguagem} clicouPai={clicouBotao}/>
    </>
  );
}

export default App;