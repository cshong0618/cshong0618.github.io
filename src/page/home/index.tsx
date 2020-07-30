import React from 'react';

import Container from '@material-ui/core/Container';

import C from '../../atom/container';
import CodeBlock from '../../atom/code';

const HELLO_WORLD_GO = `
    fmt.Println("Hello world")

`

const Home = () => {
    return (
        <>
            <C>
                <CodeBlock
                    content = {HELLO_WORLD_GO}
                ></CodeBlock>
            </C>
        </>
    );
}

export default Home;
