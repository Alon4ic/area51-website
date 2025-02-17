import React from 'react';

export default function LinesTop() {
    return (
        <>
            <div className="absolute inset-y-0 left-[80%] w-0.5 bg-gray-500/60">
                <div className="absolute sm:top-[85%] top-[90%] -mt-4 h-9 w-0.5 bg-white"></div>
            </div>

            {/* Горизонтальная линия с белым отрезком в центре */}
            <div className="absolute inset-x-0 sm:top-[85%] top-[90%] h-0.5 bg-gray-500/60">
                <div className="absolute left-[80%] -ml-4 w-9 h-0.5 bg-white"></div>
            </div>
        </>
    );
}
