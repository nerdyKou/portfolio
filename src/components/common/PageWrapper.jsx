import React, { useEffect, useRef } from 'react';

const PageWrapper = ({ children, className = "" }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-4');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const children = wrapperRef.current?.children;
        if (children) {
            Array.from(children).forEach((child) => {
                child.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
                observer.observe(child);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={wrapperRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
            {children}
        </div>
    );
};

export default PageWrapper;
