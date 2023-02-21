import styles from './.module.css'

const Rows = ({ rows }) => {
    return (
        <tbody className={styles.body}>
            {rows.map((row, index) => (
                <tr key={index} className={styles.row}>
                    {row.map((data, index) => {
                        return (
                            <td key={index} className={styles.data}>
                                {data}
                            </td>
                        )
                    })}
                </tr>
            ))}
        </tbody>
    )
}

export default Rows
