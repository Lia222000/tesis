import type {AppProps} from "next/app"

import  "../styles/globals.css"

import "/public/vendor/fontawesome-free/css/all.min.css"
import "/public/vendor/animate.css/animate.min.css"
import "/public/vendor/bootstrap/css/bootstrap.min.css"
import "/public/vendor/bootstrap-icons/bootstrap-icons.css"
import "/public/vendor/boxicons/css/boxicons.min.css"
import "/public/vendor/glightbox/css/glightbox.min.css"
import "/public/vendor/remixicon/remixicon.css"
import "/public/vendor/swiper/swiper-bundle.min.css"

export default function App({Component, pageProps} : AppProps) {
    return (
        <Component {...pageProps} />
    )
}

