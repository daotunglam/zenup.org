import './BtnOrder.scss';
import * as React from 'react';

import Button from '@mui/material/Button';

export default function BtnOrder() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button aria-describedby={id} onClick={handleClick}>
                BESTELLUNG
            </Button>

        </>
    )
}