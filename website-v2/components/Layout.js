import Nav from '../components/Nav';

const Layout = ({ children}) => {
    return (
        <div>
        <Nav />
        <div className={'container'}>
            <main className={'main'}>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout