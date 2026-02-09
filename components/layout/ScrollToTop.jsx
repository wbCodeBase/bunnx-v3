"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [router]);

    return null;
};

export default ScrollToTop;
