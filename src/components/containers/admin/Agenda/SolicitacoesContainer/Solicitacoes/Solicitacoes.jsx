import { createPortal } from 'react-dom'
import { useEffect, useState, useRef } from 'react'
import styles from './body.module.css'
import Identificacao from './Identificacao'
import Header from './Header'
import Embarque from './Embarque'
import Intermediarios from './Intermediarios'
import Final from './Final'
import Motorista from './Motorista'

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

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

    // const styles = StyleSheet.create({
    //     page: {
    //         flexDirection: 'row',
    //         backgroundColor: 'white',
    //     },
    //     section: {
    //         margin: 10,
    //         padding: 10,
    //         flexGrow: 1,
    //     },
    // })

    // return (
    //     <Document>
    //         <Page size="A4" style={styles.page}>
    //             <View>
    //                 <Text>Section #1</Text>
    //             </View>
    //         </Page>
    //     </Document>
    // )

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
