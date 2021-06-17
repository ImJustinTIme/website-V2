import Nav from '../components/Nav';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children}) => {
    return (
        <div>
        <Nav />
        <div className={layoutStyles.container}>
            <main className={layoutStyles.main}>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout