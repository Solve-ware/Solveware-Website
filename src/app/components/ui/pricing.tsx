import { Card } from './card';
import { Button } from './button';
import { PricingPlan } from '../../../../types';

export default function Pricing() {
    const plans: PricingPlan[] = [
        {
            title: "Hobby",
            price: "$0",
            description: "For individuals trying out the product",
            features: [
                "Publish up to 5 posts per month",
                "Basic analytics",
                "Single user account",
                "Email support"
            ],
            buttonText: "Get Started",
        },
        {
            title: "Starter",
            price: "$20",
            description: "For serious founders",
            features: [
                "Publish up to 20 posts per month",
                "Advanced analytics",
                "Up to 3 user accounts",
                "Priority email support",
                "Basic AI content generation"
            ],
            buttonText: "Get Started",
            popular: true
        },
        {
            title: "Pro",
            price: "$30",
            description: "For small to large businesses",
            features: [
                "Unlimited posts",
                "Full analytics suite",
                "Unlimited user accounts",
                "24/7 phone & email support",
                "Advanced AI content generation",
                "Custom branding"
            ],
            buttonText: "Get Started",
        },
        {
            title: "Enterprise",
            price: "Custom",
            description: "For large scale businesses",
            features: [
                "Everything in Pro",
                "Custom integrations",
                "Dedicated account manager",
                "Custom feature development",
                "On-premise installation available",
                "Service level agreement"
            ],
            buttonText: "Contact Sales",
        }
    ];

    return (
        <section id="pricing" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple pricing</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Simple pricing for startups, small businesses, medium scale businesses and enterprises.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className={`flex flex-col ${plan.popular ? 'border-purple-500 shadow-xl shadow-purple-500/10' : ''}`}
                    >
                        {plan.popular && (
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
                                POPULAR
                            </span>
                        )}
                        <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                            {plan.price !== "Custom" && <span className="ml-1 text-xl text-gray-400">/ month</span>}
                        </div>
                        <p className="mt-2 text-gray-300">{plan.description}</p>

                        <ul className="mt-6 space-y-3">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex">
                                    <svg className="h-5 w-5 text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 mt-auto pt-6">
                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                {plan.buttonText}
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}