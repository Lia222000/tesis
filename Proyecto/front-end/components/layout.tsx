import Head from "next/head"
import React from "react"
import Link from "next/link"

export default function Layout({children,}: {
    children: React.ReactNode;
    
}) {
        return (

            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>Trámites Santiago</title>
                <Link rel = "ico" href = "/logo/logo-ts.ico"/>
  
                <Link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

                <script src="/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="/vendor/php-email-form/validate.js"></script>

                <script src="/js/main.js"></script>
                {children}
            </Head>
        )
    }