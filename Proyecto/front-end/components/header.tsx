import header_styles from "../styles/header.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className ={header_styles.header} classfixed-top >
      <div className ="container d-flex align-items-center">
    
          <Link href="/">
            <Image src={"/logos/logo-ts.ico"} alt={"El logo"} width={100} height={70}/>
          </Link> 
        
        <nav className={header_styles.navbar} classorder-last order-lg-0>
          <ul className={header_styles.navbar}>
            <li><a className={header_styles.nav_link } href="#home">Inicio</a></li>
            <li><a className={header_styles.nav_link} href="#about">Guía</a></li>
            <li><a className={header_styles.nav_link} href="#service">Servicios</a></li>
          </ul>
          <i className={header_styles.mobile_nav_toggle} bi-list></i>
        </nav>

        <a href="#admi" className={header_styles.admi_btn}><span className ="d-none d-md-inline"></span> Administrador</a>

      </div>
    </header>
  )
}