interface AnimatedGradientProps {
    className?: string;
}

export default function AnimatedGradient({ className = '' }: AnimatedGradientProps) {
    return (
        <div className={`animate-gradient ${className}`}
            style={{
                backgroundImage: 'radial-gradient(circle at top left, rgba(79, 70, 229, 0.2) 0%, transparent 30%), radial-gradient(circle at top right, rgba(139, 92, 246, 0.2) 0%, transparent 30%)'
            }}
        />
    );
}
