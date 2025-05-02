import Image from 'next/image';
import { Button } from './button';

export default function HeroSection() {
    return (
        <section className="w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                    Transform Your Marketing with <span className="text-gradient">Proactiv</span>
                </h1>
                <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-300">
                    Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our All-in-One Marketing Solution
                </p>
                <div className="mt-10">
                    <Button className="mx-2 px-8 py-3 text-lg">Get Started</Button>
                    <Button variant="outline" className="mx-2 px-8 py-3 text-lg">Learn More</Button>
                </div>
                <p className="text-gray-400 mt-6">Trusted by 27,000+ creators</p>
            </div>

            <div className="mt-16 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <Image
                        src="/api/placeholder/1200/675"
                        alt="Proactiv Dashboard"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
