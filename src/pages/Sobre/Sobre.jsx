import jessica from '../../assets/sobre_jessica1.png'
import './Sobre.css'

export function Sobre () {
    return (
        <div className='sobre' id='sobre'>
            <div className='container'>
                <img src={jessica} alt='jessica' />
                <div className='col-2'>
                    <h2>Sobre</h2>
                    <span className='line'></span>
                    <p>Sou a Jéssica Laine, nutricionista, especialista em saúde da mulher.</p>
                    <p>Transformando mente, corpo e alma, através da alimentação!</p>
                    <button className='button'><a  className='button' href="https://api.whatsapp.com/send?phone=5517997590771&text=Ol%C3%A1%2C+estou+precisando+de+uma+nutri%21+%F0%9F%92%9A" target="_blank" rel="noreferrer">saiba mais</a></button>
                </div>
            </div>
        </div>
    )
};
