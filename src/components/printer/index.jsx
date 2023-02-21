import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

const usePrinter = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const buildDocumentToPrint = (Document) => (
        <div hidden>
            <div ref={componentRef}>{Document}</div>
        </div>
    )

    return { handlePrint, buildDocumentToPrint }
}

export default usePrinter
