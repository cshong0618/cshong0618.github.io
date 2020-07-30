import React from 'react';

import {COLOR_LEVEL_2} from '../../common/colors';

import Container from '@material-ui/core/Container';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: COLOR_LEVEL_2,
        padding: '1% 1% 1% 1%',
        minHeight: '99vh'
    },
    container: {
        marginTop: '1%',
        marginBottom: '1%',
    }
})

interface CProps {
    children?: React.ReactNode;
}

const C: React.FC<CProps> = (props) => {
    const classes = useStyles();

    return (
        <>
        <Container 
            maxWidth="lg"
            className={classes.container}
        >
            <Paper
                className={classes.root}
                elevation={3}
            >
                {props.children || <></>}
            </Paper>
        </Container>
        </>
    )
}

export default C;