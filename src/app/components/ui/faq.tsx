"use client"

import { useState } from 'react';
import { FAQItem } from '../../../../types';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FAQItem[] = [
        {
            question: "How does Proactiv's AI content generation work?",
            answer: "Our AI analyzes your brand voice, target audience, and marketing goals to generate highly relevant and engaging content. It learns from your best-performing posts and continually improves its suggestions based on audience engagement metrics."
        },
        {
            question: "Can I schedule posts in advance?",
            answer: "Yes, you can schedule posts weeks or months in advance across all connected platforms. Our calendar view makes it easy to visualize your content strategy and ensure consistent posting schedules."
        },
        {
            question: "Which social media platforms do you support?",
            answer: "We support all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, TikTok, and YouTube. We regularly add support for emerging platforms as they gain popularity."
        },
        {
            question: "How does the pricing work for larger teams?",
            answer: "Our Pro plan supports unlimited users at a flat monthly rate. For Enterprise customers with specific needs, we offer custom pricing based on usage volume, required features, and level of support needed."
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes, we offer a 14-day free trial of our Pro plan with no credit card required. This gives you full access to all features so you can evaluate if Proactiv is right for your business."
        }
    ];

    return (
        <section id="faq" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
            </div>

            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="flex justify-between items-center w-full p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-left"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="text-white font-medium">{faq.question}</span>
                            <svg
                                className={`w-5 h-5 text-white transform ${openIndex === index ? 'rotate-180' : ''} transition-transform duration-200`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 bg-white/5 backdrop-blur-sm border-l border-r border-b border-white/10 rounded-b-lg mt-px">
                                <p className="text-gray-300">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}