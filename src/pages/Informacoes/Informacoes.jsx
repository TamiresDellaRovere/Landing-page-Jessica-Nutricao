import './Informacoes.css'

export function Informacoes() {
    return (
        <div className='info' id='info'>
            <div className='container'>
                <div className='col-1'>
                    <p>Mais de 20 histórias de evolução</p>
                    <p>Vida Saudável</p>
                    <p>Transformações sem restrições, de acordo com a necessidade de cada paciente, com um planejamento único para obter melhores resultados.</p>
                    <button className='button'>Faça parte deste time</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
};
