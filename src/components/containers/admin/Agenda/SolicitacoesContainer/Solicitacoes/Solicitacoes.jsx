import styles from './.module.css'
import OSHeader from './OSHeader'

const Solicitacoes = () => {
    let externalWindow = window.open(
        '',
        '',
        'width=800,height=800,left=200,top=200'
    )
    externalWindow.document.write()
    externalWindow.document.close()
    externalWindow.focus()

    return <OSHeader />
}

export default Solicitacoes
