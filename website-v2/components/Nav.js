import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss'
import React, { useEffect} from 'react';

const Nav = () => {

    const [scroll, setScroll] = React.useState(true);
    const [iconSize, setIconSize] = React.useState(50);
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY < 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
    })

    useEffect(() => {
          window.addEventListener("resize", () => {
            console.log(window.innerWidth);
            setIconSize(window.innerWidth >= 768 ? 50 : 40);
          })

          setIconSize(window.innerWidth >= 768 ? 50 : 40);
    })

    return (
        <div className={`${navStyles.navBorder} ${scroll ? '' : navStyles.top}`}>
            <div className={navStyles.nav}>
                <div className={navStyles.navParent}>
                    <div className={navStyles.imageParent}>
                    <img
                        className={navStyles.navImage}
                        src='/images/Strange.png'
                        width={iconSize}
                        height={iconSize} />
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