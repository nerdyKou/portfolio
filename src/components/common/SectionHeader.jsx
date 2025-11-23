import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            </h2>
            {subtitle && <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
