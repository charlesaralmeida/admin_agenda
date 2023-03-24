import UserViewHeader from '../components/header/userViewHeader'
import AdminPage from './AdminPage'
import { useSelector } from 'react-redux'
import { getState } from '../redux/slices/admin'
import { PAGES } from '../utils/constants'
import './style.css'

const AdminPages = () => {
    const state = useSelector(getState)
    const getPage = (pageName) => {
        switch (pageName) {
            case PAGES.ADMIN:
                return <AdminPage />
        }
    }

    return (
        <div className="pages">
            <div className="header">
                <UserViewHeader />
            </div>
            <div className="page-content">{getPage(state.currentPage)}</div>
        </div>
    )
}

export default AdminPages
