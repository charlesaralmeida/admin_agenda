import styles from './.module.css'

const Rows = ({ rows }) => {
    const isOdd = (n) => Math.abs(n % 2) == 1

    return (
        <tbody className={styles.body}>
            {rows.map((row, index) => {
                let last_index = row.length - 1
                return (
                    <>
                        <tr
                            key={index}
                            className={
                                isOdd(index) ? styles.row_odd : styles.row_even
                            }
                        >
                            {row.map((col, col_index) => {
                                if (col_index < last_index)
                                    return (
                                        <>
                                            <td
                                                rowSpan={
                                                    col_index < last_index - 2
                                                        ? 2
                                                        : 1
                                                }
                                                key={index}
                                                className={styles.data}
                                            >
                                                {col}
                                            </td>
                                        </>
                                    )
                            })}
                        </tr>
                        <tr
                            key={index}
                            className={
                                isOdd(index) ? styles.row_odd : styles.row_even
                            }
                        >
                            <td
                                colSpan={2}
                                key={index}
                                className={
                                    isOdd(index)
                                        ? styles.data_empresa_odd
                                        : styles.data_empresa_even
                                }
                            >
                                {row[last_index]}
                            </td>
                        </tr>
                    </>
                )
            })}
        </tbody>
    )
}

export default Rows
