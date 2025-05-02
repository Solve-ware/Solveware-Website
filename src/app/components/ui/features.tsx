import Image from 'next/image';
import { FeatureItem } from '../../../../types';

export default function Features() {
    const features: FeatureItem[] = [
        {
            title: "Post to multiple platforms at once",
            description: "With our AI-powered platform, you can post to multiple platforms at once, saving you time and effort.",
            image: "/api/placeholder/300/200"
        },
        {
            title: "Analytics for everything",
            description: "Check analytics, track your posts, and get insights into your audience.",
            image: "/api/placeholder/300/200"
        },
        {
            title: "Integrated AI",
            description: "Proactiv uses AI to help you create engaging content.",
            image: "/api/placeholder/300/200"
        },
        {
            title: "Easy Collaboration",
            description: "Proactive can integrate with Zapier, Slack and every other popular integration tools.",
            image: "/api/placeholder/300/200"
        }
    ];

    const detailedFeatures: FeatureItem[] = [
        {
            title: "Email Automation",
            description: "With our best in class email automation, you can automate your entire emailing process.",
            image: "/api/placeholder/800/500"
        },
        {
            title: "Cross Platform Marketing",
            description: "With our cross platform marketing, you can reach your audience on all the platforms they use.",
            image: "/api/placeholder/800/500"
        },
        {
            title: "Managed CRM",
            description: "With our managed CRM, you can manage your leads and contacts in one place.",
            image: "/api/placeholder/800/500"
        },
        {
            title: "Apps Automation",
            description: "We have cloned zapier and built our very own apps automation platform.",
            image: "/api/placeholder/800/500"
        }
    ];

    return (
        <section id="features" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Automate your social media</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Proactiv houses a rich set of features to automate your marketing efforts across all social medias
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center">
                        <h3 className="text-xl font-semibold text-white mt-4">{feature.title}</h3>
                        <p className="mt-2 text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Additional feature sections with alternating layouts */}
            <div className="mt-32">
                {detailedFeatures.map((feature, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center my-24`}>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                            <p className="mt-4 text-gray-300 text-lg">{feature.description}</p>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-xl"></div>
                            <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={800}
                                    height={500}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}