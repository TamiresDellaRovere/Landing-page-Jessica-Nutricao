import user1 from '../../assets/relato-tamires.jpg'
import './Relatos.css'

export function Relatos() {
    return (
        <div className='relatos' id='relatos'>
            <div className='container'>
                <h2>Relatos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Emagreci 14kg em 100 dias, sem passar fome ou vontade de comer o que gosto, com um protocolo de reeducação alimentar e balanceamento das refeições, obrigada Jéssica!</p>
                        <p><span>Tamires S.</span></p>
                        <p>01/05/2023</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user2'/>
                        <p>texto</p>
                        <p><span>nome</span></p>
                        <p>data</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user3'/>
                        <p>texto</p>
                        <p><span>nome</span></p>
                        <p>data</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
