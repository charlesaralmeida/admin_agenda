import LeftContainer from 'components/containers/admin/Agenda/LeftContainer'
import MainContainer from 'components/containers/admin/Agenda/MainContainer'
import styles from './.module.css'

const AgendaPage = () => {
    return (
        <div className={styles.container}>
            <LeftContainer />
            <MainContainer />
        </div>
    )
}

export default AgendaPage
