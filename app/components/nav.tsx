"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const path = usePathname();
    const router = useRouter(); // Move useRouter here, at the top level of the component
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Function to handle back navigation, improved with router.asPath
    const goBack = () => {
        
        if (path.includes("/projects/") && !path.endsWith("/projects")) {
            router.push("/projects");
        } else if (path === "/projects" || path === "/contact") {
            router.push("/");
        }
    };

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            href="/projects"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                    </div>

                    <button
                        onClick={goBack}
                        className="duration-200 text-zinc-300 hover:text-zinc-100"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};
