import Header from '../Header'
import Rows from '../Rows'
import styles from './.module.css'

const Table = ({ headers, rows }) => {
    return (
        <>
            {rows.length > 0 ? (
                <table className={styles.table}>
                    <Header headers={headers} />
                    <Rows rows={rows} />
                </table>
            ) : (
                <></>
            )}
        </>
    )
}

export default Table
