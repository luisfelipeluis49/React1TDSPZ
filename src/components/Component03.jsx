import PropTypes from 'prop-types';

Component03.propTypes = {
    linguagemPai: PropTypes.string,
    clicouPai: PropTypes.func
}

export default function Component03(props) {
    
    
    return(
        <>
            <h2>Componente 03</h2>

            <h5>
                Informação enviada pelo componente pai:
                {props.linguagemPai}
            </h5>

            <button onClick={props.clicouPai}>
                Clique Aqui
            </button>
        </>
    )
}