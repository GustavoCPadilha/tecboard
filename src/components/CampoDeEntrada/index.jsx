import './campo-entrada.estilos.css';

export function CampoDeEntrada(props) {
  /// ...props para "espalhar" os conteúdos
  return <input {...props} className='campo-entrada-form' />
}