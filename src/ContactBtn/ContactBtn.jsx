import M from "./ContactBtn.module.scss";
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import clsx from "clsx";
import { Button } from '@mui/material';
import { useState, useEffect } from "react";

export default function ContactBtn() {
    const [opened, setOpened] = useState(false);
    

    return (
        <div
            className={clsx(
                M.ContactBtn,
                M.onSite,
                opened && M.opened
            )}
        >
            <Button>
                <a href="#"><CallIcon /></a>
            </Button>
            <Button>
                <a href="mailto:hello@zenup.org"><MailIcon /></a>
            </Button>
            <Button>
                <a href="#"><FacebookIcon /></a>
            </Button>
            <Button>
                <a href="#"><YouTubeIcon /></a>
            </Button>
            <Button className={opened && M.toggler} onClick={() => setOpened(!opened)}>
                <ArrowRightIcon />
            </Button>
        </div>
    )
}

