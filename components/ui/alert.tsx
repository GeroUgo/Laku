import React from 'react';

interface AlertProps {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

const alertStyles: Record<AlertProps['type'], string> = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
    return (
        <div className={`border-l-4 p-4 ${alertStyles[type]} transition-opacity duration-300`} role="alert">
            <p className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            <p>{message}</p>
        </div>
    );
};

export default Alert;
