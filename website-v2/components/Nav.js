import Link from 'next/link';
import Image from 'next/image';

import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.navParent}>
                <Image
                    className={navStyles.navImage}
                    src='/Strange.png'
                    width='50'
                    height='50' />
            
            <h1 className={navStyles.title}>Justin Kuennen</h1>
            </div>
            <div className={navStyles.links}>
                    <div className={navStyles.button}>
                        <Link href='/'>{'Home'}</Link>
                    </div>
                    <div className={navStyles.button}>
                        <Link href='/about'>{'About'}</Link>
                    </div>
            </div>
        </nav>)
}

export default Nav