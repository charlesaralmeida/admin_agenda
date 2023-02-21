import { createPortal } from 'react-dom'
import { useEffect, useState, useRef } from 'react'
import styles from './body.module.css'
import Identificacao from './Identificacao'
import Header from './Header'
import Embarque from './Embarque'
import Intermediarios from './Intermediarios'

const Solicitacoes = () => {
    //     const [container, setContainer] = useState(null)
    //     const newWindow = useRef(null)

    //     useEffect(() => {
    //         setContainer(document.createElement('div'))
    //     }, [])

    //     useEffect(() => {
    //         if (container) {
    //             newWindow.current = window.open(
    //                 '',
    //                 '',
    //                 'width=600,height=400,left=200,top=200'
    //             )
    //             newWindow.current.document.body.appendChild(container)

    //             const curWindow = newWindow.current

    //             return () => curWindow.close()
    //         }
    //     }, [container])

    //     return container && createPortal(<OSHeader />, container)
    return (
        <div className={styles.body}>
            <Header />
            <Identificacao />
            <Embarque />
            <Intermediarios />
        </div>
    )
}

export default Solicitacoes
