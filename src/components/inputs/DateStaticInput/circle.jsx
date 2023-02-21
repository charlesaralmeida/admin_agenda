import styles from './.module.css'

const Circle = ({ color }) => {
    switch (color) {
        case 'red':
            return <div className={styles.redcircle}>x</div>
        case 'green':
            return <div className={styles.greencircle}>x</div>
    }
}

export default Circle
