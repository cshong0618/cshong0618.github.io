import React from 'react';
import './index.css';

interface CodeBlockProps {
    content: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({content}) => {
    return (
        <>
            <pre className="code_block">
                {content}
            </pre>
        </>
    )
}

export default CodeBlock;