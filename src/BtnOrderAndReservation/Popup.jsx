import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


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

            <List sx={{ pt: 0 }}>
                <ListItem autoFocus button onClick={() => handleListItemClick()}>
                    <ListItemText
                        primary="IN MAXVORSTADT"
                        secondary="Augustenstraße 52 80333 München"
                    />
                </ListItem>
                <ListItem autoFocus button onClick={() => handleListItemClick()}>
                    <ListItemText
                        primary="IN ANGER BLOCK INNENHOF"
                        secondary="Sendlinger Straße 7 80331 München"
                    />
                </ListItem>
            </List>

        </Dialog>
    )
}
