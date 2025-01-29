import React, { useState } from 'react';
import Alert from './alert';

interface CopyButtonProps {
    textToCopy: string;
    buttonText?: string;
    className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy = "", buttonText = 'Copy', className = "" }) => {
    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const [showAlert, setShowAlert] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                if (alert === null) {
                    setAlert({ message: "Copiado al portapapeles", type: "success" });
                    setShowAlert(true)
                }
            })
            .catch(() => {
                setAlert({ message: "Error al copiar al portapapeles", type: "error" });
                setShowAlert(false)
            });

        // Ocultar alerta después de 3 segundos
        setTimeout(() => {
            setAlert(null)
        }, 3000);

        setTimeout(() => {
            setShowAlert(false)
        }, 2500);
    };

    return (
        <div className="">
            <button
                onClick={handleCopy}
                className={`border p-2 rounded-xl hover:bg-black hover:text-white transition duration-300 ${className}`}
            >
                {buttonText}
            </button>

            {/* Mostrar alerta si existe */}
            {alert && (
                <div className={`fixed top-40 2xl:top-8 left-0 alert ${showAlert ? 'show' : 'hide'}`}>
                    <Alert message={alert.message} type={alert.type} />
                </div>
            )}
        </div>
    );
};

export default CopyButton;
