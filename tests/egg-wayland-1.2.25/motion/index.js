// utility functions
const nonlinear = (t, speed = 1.0) => Math.floor(Math.max(100 - t, 0) / 15 + 1) * speed;
const linear = (t, speed = 1.0) => 100 / 10 * speed;

export { nonlinear, linear };

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const ExampleComponent = () => {
    const [targetCode, setTargetCode] = useState(null);
    const [error, setError] = useState(null);
    const [isConverting, setIsConverting] = useState(false);

    const handleConversion = async (prompt) => {
        setIsConverting(true);
        try {
            const response = await window.claude.complete(prompt);
            setTargetCode(response);
        } catch (err) {
            setError(`Conversion failed: ${err.message || 'Unknown error'}`);
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <div>
            {isConverting && <Loader2 />}
            {targetCode && <pre>{targetCode}</pre>}
            {error && <div>{error}</div>}
            <button onClick={() => handleConversion('some prompt')}>Convert</button>
        </div>
    );
};
