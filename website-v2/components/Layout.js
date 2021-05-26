import Nav from '../components/Nav';
import styles from '../styles/Layout.module.css';

const Layout = ({ children}) => {
    return (
        <>
        <Nav />
        <div classname={styles.container}>
            <main classname={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout