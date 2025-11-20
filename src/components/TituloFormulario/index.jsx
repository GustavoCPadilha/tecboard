import './titulo-formulario.estilos.css';

//pros é um OBJETO
// props.filhos
// { objeto desconstruído }
export function TituloFormulario({ children }) {
  return (
    <h2 className='titulo-form'>
      {children}
    </h2>
  )
}