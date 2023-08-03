import Link from "next/link"
import sidebar_style from "../styles/sidebar.module.css"

export default function Sidebar() {
    
    return (

        <div>
            <aside className={sidebar_style.sidebar}>
                <nav className={sidebar_style.nav}>
                    <div>
                        <Link href="/educacion" className={sidebar_style.nav_logo}>
                            <i className='bx bx-menu'></i>
                            <span className={sidebar_style.nav_logo_name}>Educación</span>
                        </Link> 

                        <div className="nav_list">
                            <Link href="/Primera Infancia" className={sidebar_style.nav_logo}>
                                <i className='bx bx-child'></i>
                                <span className={sidebar_style.nav_logo_name}>Primera Infancia</span>

                                <Link href="/Matrícula de Círculos Infantíles" className={sidebar_style.nav_logo}>
                                    <span className={sidebar_style.nav_logo_name}>Matrícula de Círculos Infantíles</span>
                                </Link>  

                                <Link href="/Traslado de Círculos Infantíles" className={sidebar_style.nav_logo}>
                                    <span className={sidebar_style.nav_logo_name}>Traslado de Círculos Infantíles</span>
                                </Link> 
                            </Link> 
                            
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
        
    )
}