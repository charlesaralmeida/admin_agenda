import styles from './body.module.css'
import Identificacao from './Identificacao'
import Header from './Header'
import Embarque from './Embarque'
import Intermediarios from './Intermediarios'
import Final from './Final'
import Motorista from './Motorista'

const Solicitacoes = () => {
    return (
        <div className={styles.body}>
            <Header />
            <Identificacao />
            <Embarque />
            <Intermediarios />
            <Final />
            <Motorista />
        </div>
    )
}

export default Solicitacoes
