import styles from './.module.css'

const MotoristaSelect = ({ handleChange, keyValue, state, index, list }) => {
    return (
        <select
            value={state}
            onChange={(event) =>
                handleChange(keyValue, index, event.target.value)
            }
            className={styles.select}
        >
            <option value=""></option>
            {list.map((motorista, index) => (
                <option value={motorista.id} key={index}>
                    {motorista.nome}
                </option>
            ))}
        </select>
    )
}

export default MotoristaSelect
