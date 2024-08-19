import React from 'react'
import copy from 'copy-to-clipboard';
const Installation = () => {
    const [copying, setCopying] = React.useState(0);

    const onCopy = React.useCallback(() => {
        copy('npm install react-grid-selection');
        setCopying((c) => c + 1);
        setTimeout(() => {
            setCopying((c) => c - 1);
        }, 2000);
    }, []);

    return (
        <div className=''>
            <h2 className='font-bold mb-2'>Installation</h2>
            <code className='flex border items-center justify-between p-2 bg-white rounded-lg'>
                npm install react-grid-selection
                <button className='size-8 border flex items-center justify-center rounded-lg cursor-copy' onClick={onCopy}>
                    {
                        copying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check size-4"><path d="M20 6 9 17l-5-5" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy size-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                        )
                    }
                </button>
            </code>
        </div>
    )
}

export default Installation