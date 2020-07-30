import React from 'react';

import Container from '@material-ui/core/Container';

import CodeBlock from '../../atom/code';
import { Typography } from '@material-ui/core';

const HELLO_WORLD_GO = `
    fmt.Println("Hello world")

`

const Home = () => {
    return (
        <>
            <Container maxWidth="lg">
                <CodeBlock
                    content = {HELLO_WORLD_GO}
                ></CodeBlock>
            </Container>
        </>
    );
}

export default Home;
