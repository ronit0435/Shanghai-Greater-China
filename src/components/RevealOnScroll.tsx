import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms or step
  direction?: 'up' | 'none';
  key?: React.Key;
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const delayClass =
    delay === 100
      ? 'delay-100'
      : delay === 150
      ? 'delay-150'
      : delay === 200
      ? 'delay-200'
      : delay === 300
      ? 'delay-300'
      : delay === 400
      ? 'delay-400'
      : '';

  const transformStyle = direction === 'up'
    ? isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-6'
    : isVisible
    ? 'opacity-100'
    : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${transformStyle} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
