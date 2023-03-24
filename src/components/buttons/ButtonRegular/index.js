import styles from './.module.css'

const ButtonRegular = ({
    color,
    backgroundColor,
    height,
    width,
    handleClick,
    label,
}) => (
    <button
        className={styles.button_regular}
        style={{
            color: color ? color : 'black',
            backgroundColor: backgroundColor ? backgroundColor : '#00024116',
            width: width,
            height: height,
        }}
        onClick={handleClick}
    >
        {label}
    </button>
)

export default ButtonRegular
