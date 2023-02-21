import React from 'react'
import IconsFontAwesome from 'components/icons/iconsFontAwesome'
import styles from './.module.css'

const ButtonWithIcon = ({ icon, handleClick }) => {
    const Icon = (
        <IconsFontAwesome
            name={icon.name}
            size={icon.size}
            color={icon.color}
        />
    )

    return (
        <button className={styles.buttonWithIcon} onClick={handleClick}>
            <div className={styles.icon}>{Icon}</div>
        </button>
    )
}

export default ButtonWithIcon
