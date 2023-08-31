import { useEffect } from 'react';

function useKeyPress(targetKey: string, action: () => void) {
    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === targetKey.toLowerCase() || event.key === targetKey.toUpperCase() || event.key === targetKey) {
                action();
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [targetKey, action]);
}

export default useKeyPress