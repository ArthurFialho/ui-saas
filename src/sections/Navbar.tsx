import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";

const navLinks = [
    { label: "home", href: "#" },
    { label: "features", href: "#features" },
    { label: "integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
                    <div>
                        <Image
                            src={logoImage}
                            alt="layers logo"
                            className="h-9 md:h-auto w-auto"
                        />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="text-gray-300 hover:text-lime-400 transition-all duration-300 hover:animate-pulse hover:drop-shadow-[0_0_15px_#a3e635] transform hover:scale-110"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu md:hidden"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button
                            variant="secondary"
                            className="hidden md:inline-flex items-center"
                        >
                            Log In
                        </Button>
                        <Button
                            variant="primary"
                            className="hidden md:inline-flex items-center"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
