import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
    return (
        <div className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ${hoverable ? 'hover:border-purple-500/50 transition-all duration-300' : ''} ${className}`}>
            {children}
        </div>
    );
}