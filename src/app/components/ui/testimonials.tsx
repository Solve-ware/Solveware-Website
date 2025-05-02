import Image from 'next/image';
import { Card } from './card';
import { TestimonialItem } from '../../../../types';

export default function Testimonials() {
    const testimonials: TestimonialItem[] = [
        {
            quote: "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
            name: "Manu Arora",
            title: "Tech Innovator & Entrepreneur"
        },
        {
            quote: "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
            name: "Tyler Durden",
            title: "Creative Director & Business Owner"
        },
        {
            quote: "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
            name: "Alice Johnson",
            title: "Senior Software Engineer"
        },
        {
            quote: "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
            name: "Bob Smith",
            title: "Industry Analyst"
        },
        {
            quote: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
            name: "Cathy Lee",
            title: "Product Manager"
        },
        {
            quote: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
            name: "David Wright",
            title: "Research Scientist"
        },
    ];

    return (
        <section id="testimonials" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Used by entrepreneurs</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Proactiv is used by serial entrepreneurs and overachievers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="flex flex-col">
                        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                        <div className="mt-auto">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-gray-400 text-sm">{testimonial.title}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}