import { type } from "os";
import React from "react";
import { any } from "zod";


export function main() {
    "use strict";

    var classList: any;
    var offsetTop: any; 
    var offsetHeight: any;
    var hash: any;
    var GLightbox: any;
    var Swiper: any;
    var PureCounter: any;
    
    const select = (el: string, all = false) => {
        el = el.trim()
        if (all) {
          return [document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
    }

    const on = (type: any, el: string, listener: any, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                forEach(e => e.addEventListener(type, listener))
            } else {
                addEventListener(type, listener)
          }
        }
    }

    const onscroll = (el: { addEventListener: (arg0: string, arg1: any) => void; }, listener: any) => {
        el.addEventListener('scroll', listener)
    }

    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        
        forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= offsetTop && position <= (offsetTop + offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }

    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    const scrollto = (el: string) => {
        let header = select('#header')
        let offset = header + offsetHeight
    
        let elementPos = select(el) + offsetTop
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        })
    }

    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
        
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                classList.add('header-scrolled')
                if (selectTopbar) {
                    classList.add('topbar-scrolled')
                }
            } else {
                classList.remove('header-scrolled')
                if (selectTopbar) {
                    classList.remove('topbar-scrolled')
                }
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    let backtotop = select('.back_to_top')
    if (backtotop) {

        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                classList.add('active')
            } else {
                classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    on('click', '.mobile_nav_toggle', (e: any) => {
        
        select('#navbar')
        classList.toggle('navbar_mobile')
        classList.toggle('bi-list')
        classList.toggle('bi-x')
    })

    on('click', '.navbar .dropdown > a', function(e: { preventDefault: () => void; }) {
        if (select('#navbar') + classList.contains('navbar_mobile')) {
          e.preventDefault()
          classList.toggle('dropdown_active')
        }
    }, true)

    on('click', '.scrollto', (e: { preventDefault: () => void;}) => {
        if (select(hash)) {
          e.preventDefault()
    
          let navbar = select('#navbar')
          if (navbar + classList.contains('navbar_mobile')) {
            navbar + classList.remove('navbar_mobile')
            let navbarToggle = select('.mobile_nav_toggle')
            navbarToggle + classList.toggle('bi-list')
            navbarToggle + classList.toggle('bi-x')
          }
          scrollto(hash)
        }
    }, true)

    window.addEventListener('load', () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash)
          }
        }
    });

    let preloader = select('#preloader');
    var remove: any;
    if (preloader) {
        window.addEventListener('load', () => {
            remove()
        });
    } 

    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    const galelryLightbox = GLightbox({
        selector: '.galelry-lightbox'
    });

    new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
    
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
    
    new PureCounter();
}

function forEach(arg0: (e: any) => any) {
    throw new Error("Function not implemented.");
}
