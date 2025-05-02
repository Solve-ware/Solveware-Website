import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-bold text-xl text-white">
                            Proactiv
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Features
                            </Link>
                            <Link href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Testimonials
                            </Link>
                            <Link href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Pricing
                            </Link>
                            <Link href="#faq" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
