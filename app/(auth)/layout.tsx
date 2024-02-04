import { ReactNode } from "react";
import Image from "next/image"
import BackgroundImage from "../../public/login_background.jpg"
import Logo from "../../public/netflix_logo.svg"

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex h-screen w-screen md:justify-center md:items-center">
            <Image
                src={BackgroundImage}
                alt="Backgound"
                className="-z-10 hidden md:flex md:object-cover brightness-50 blur-sm "
                priority
                fill
            />
            <Image
                src={Logo}
                alt="Logo"
                priority
                width={120}
                className="absolute top-4 left-4"
            />
            {children}
        </div>
    )
}