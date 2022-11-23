import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export default function Popup(props) {

    const { onClose, open, btnName } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>

            <DialogTitle>
                {(btnName === 'order')
                    ? 'BESTELLUNG'
                    : 'TISCH RESERVIERUNG'}
            </DialogTitle>

            <i style={{padding: '16px',}}>
                Bestellung- und Reservierungssystem werden gerade entwickelt.
                <br />
                Zum Bestellen oder Tisch Reservieren können Sie uns gern anrufen.
            </i>

            <List sx={{ pt: 0 }}>
                <ListItem autoFocus button onClick={() => handleListItemClick()}>
                    <a href="tel:+498932795287" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItemText
                            primary="bei LOCATION 1 - MAXVORSTADT"
                            secondary="Augustenstraße 52 80333 München"
                        />
                        <CallRoundedIcon /> 089 3279 5287
                    </a>
                </ListItem>
                <ListItem autoFocus button onClick={() => handleListItemClick()}>
                    <a href="tel:+498994005677" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItemText
                            primary="bei LOCATION 2 - ANGER BLOCK INNENHOF"
                            secondary="Sendlinger Straße 7 80331 München"
                        />
                        <CallRoundedIcon /> 089 9400 5677
                    </a>
                </ListItem>
            </List>

        </Dialog>
    )
}
