import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Navbar() {
    gsap.registerPlugin(ScrollTrigger);

    const navbarRef = useRef(null)

    useEffect(() => {
        const showNav = gsap.fromTo(
            navbarRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.4
        }).progress(1);
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ?
                    showNav.play()
                    : showNav.reverse()
            }
        });
    }, [])
    return (
        <nav ref={navbarRef} className='navbar'>
            <span>Home</span>
            <div className='hamburger'>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar