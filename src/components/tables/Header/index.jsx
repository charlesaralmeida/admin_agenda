import styles from './.module.css'

const Header = ({ headers }) => {
    return (
        <thead className={styles.head}>
            <tr className={styles.row}>
                {headers.map((header, index) => {
                    return (
                        <th key={index} className={styles.data}>
                            {header}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default Header
