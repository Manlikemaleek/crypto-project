import React from 'react'
// import Image from 'next/image'
import Search from '../assets/svg/search'
import {ConnectButton} from 'web3uikit'


const styles = {
    header: `bg-[#f1f3f5] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    nav:`flex justify-center items  -center gap-[20px] text-black`,
    navItem:`relative mr-1 cursor-pointer hover:opacity-60`,
    badge:`rounded-full bg-green-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputCont:`flex items-center justify-center p-4 rounded bg-[#f8f9fa]`,
    input:`bg-transparent outline-none text-white w-70 ml-3 text-black`,
}

const Header = () => {
  return (
    <div className={styles.header}>
        <nav className={styles.headerWrapper}>
            <div className={styles.nav}>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Cryptocurrencies</div>
                    <div className={styles.badge} />
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Exchanges</div>
                    
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>NFT</div>
                    <div className={styles.badge} />
                </div>


                <div className={styles.navItem}>
                    <div className={styles.navLink}>Crypto- town</div>
                    <div className={styles.badge} />
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Portfolio</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Watchlist</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Learn</div>
                </div>
            </div>
        </nav>
        
        <div className='flex item-center'>
            <ConnectButton/>
            <div className={styles.inputCont}>
                <Search  />
                <input className={styles.input} placeholder = 'search'/>
            </div>
        </div>

    </div>
  )
}


export default Header