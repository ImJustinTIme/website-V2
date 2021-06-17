import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css'
import React, {useEffect} from 'react';

const Nav = () => {

    const [scroll, setScroll] = React.useState(true);
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY < 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })

    return (
        <div className={`${navStyles.navBorder} ${scroll ? '' : navStyles.top}`}>
            <div className={navStyles.nav}>
                <div className={navStyles.navParent}>
                    <div className={navStyles.imageParent}>
                    <Image
                        className={navStyles.navImage}
                        src='/images/Strange.png'
                        width='50'
                        height='50' />
                    </div>
                <h1 className={navStyles.title}>Justin Kuennen</h1>
                </div>
                <div className={navStyles.links}>
                        <div className={navStyles.button}>
                            <Link href='/'>{'Home'}</Link>
                        </div>
                        <div className={navStyles.button}>
                            <Link href='/about'>{'About'}</Link>
                        </div>
                        <div className={navStyles.button}>
                            <Link href='/projects'>{'Projects'}</Link>
                        </div>
                        <div className={navStyles.button}>
                            <Link href='/Links'>{'Links'}</Link>
                        </div>
                </div>
            </div>
        </div>)
}
export default Nav