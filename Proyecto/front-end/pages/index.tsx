import Layout from "../components/layout"
import styles from "../styles/style.module.css"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/main"

export default function Page() {

    return(
        <Layout>

            <html>

                <body>
                    <Header/>
   
                    <section id="home" className={styles.home} d-flex align-items-center>
                        <div className={styles.container}>
                            <h1>Bienvenidos a Trámites Santiago</h1>
                            <h2>Plataforma de gestion de trámites de la provincia Satiago de Cuba.</h2>
                        </div>
                    </section>

                    <main>

                        <section id="why-us" className={styles.why_us}>
                            <div className = "container">

                                <div className ="row">

                                    <div className ="col-lg-4 d-flex align-items-stretch">

                                        <div className={styles.content}>
                                            <h3>¿Qué es Trámites Santiago?</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                            </p>

                                            <div className ="text_center">
                                                <a href="#" className={styles.more_btn}>Learn More <i className ="bx bx-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className ="col-lg-8 d-flex align-items-stretch">
                                        <div className={styles.icon_boxes} d-flex flex-column justify-content-center>
                                            <div className ="row">

                                                <div className ="col-xl-4 d-flex align-items-stretch">
                                                    <div className={styles.icon_box} mt-4 mt-xl-0>
                                                        <i className ='bx bxs-user-check'></i>
                                                        <h4>Calidad en el servicio</h4>
                                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                                    </div>
                                                </div>

                                                <div className ="col-xl-4 d-flex align-items-stretch">
                                                    <div className={styles.icon_box} mt-4 mt-xl-0>
                                                        <i className ='bx bxs-image-add'></i>
                                                        <h4>Publicidad del servicio</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                                    </div>
                                                </div>

                                                <div className ="col-xl-4 d-flex align-items-stretch">
                                                    <div className={styles.icon_box} mt-4 mt-xl-0>
                                                        <i className ='bx bxs-check-square'></i>
                                                        <h4>Exelente servicio al cliente</h4>
                                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section id="about" className={styles.about}>
                            <div className="container_fluid">

                                <div className ={styles.row}>
                                    <div className="video_box col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch position-relative">
                                        <a href="#" className={styles.play_btn} mb-4-glightbox ></a>
                                    </div>

                                    <div className={styles.icon_boxes} col-xl-7 col-lg-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5>
                                        <h3>Guía para un buen uso de la plataforma</h3>
                                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                                        <div className={styles.icon_box}>
                                            <div className ={styles.icon}><i className='bx bx-edit'></i></div>
                                            <h4 className={styles.title}><a href="">¿Cómo solicito un servico?</a></h4>
                                            <p className={styles.description}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                        </div>

                                        <div className={styles.icon_box}>
                                            <div className={styles.icon}><i className='bx bx-file'></i></div>
                                            <h4 className={styles.title}><a href="">¿Qué documentos debo tener antes de realizar una solicitud?</a></h4>
                                            <p className={styles.description}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                        </div>

                                        <div className={styles.icon_box}>
                                            <div className={styles.icon}><i className='bx bx-file-find'></i></div>
                                            <h4 className={styles.title}><a href="">¿Cómo se por donde va mi proceso?</a></h4>
                                            <p className={styles.description}>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>

                        <section id="service" className={styles.service}>
                            <div className="container">

                                <div className={styles.section_title}>
                                    <h2>Servicios</h2>
                                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                </div>

                                <div className ="row">
                                    <div className ="col-lg-4 col-md-6 d-flex align-items-stretch">
                                        <div className={styles.icon_box}>
                                            <div className={styles.icon}><i className='bx bxs-graduation'></i></div>
                                            <h4><a href="/educacion"> Educación </a></h4>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                        </div>

                                     </div>
                                </div>

                            </div>
                        </section>

                    </main>

                    <Footer/>

                    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
                    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                    <script src="assets/vendor/php-email-form/validate.js"></script>

                    <script src="assets/js/main.js"></script>

                </body>

            </html>
                    
        </Layout>
   
    )   
}