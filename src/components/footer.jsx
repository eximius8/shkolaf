import React from "react";
import { Typography, Link, IconButton } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon } from '@iconify/react';
import vkIcon from '@iconify-icons/mdi/vk';



const socialIconLinks = [
  {
    ico: <InstagramIcon />,
    link: "https://www.instagram.com/shkolaor"
  },
  {
    ico: <Icon icon={vkIcon} />,
    link: "https://vk.com/shkolaor"
  },
  {
    ico: <FacebookIcon />,
    link: "https://facebook.com/groups/shkolaor"
  },
]


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="#">
          sport-school-2.ru
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({ 
    footer: {
  
      
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      left:0,
      right:0,    
      bottom: 0, 
    },
  }));  


export default function Footer (){
    const classes = useStyles();


    return (       
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            ГАУ ВО "СШОР № 2"    
        </Typography>
        <Typography align="center">
            {socialIconLinks.map(({ico, link}) =>
              <IconButton key={link} href={link} target="_blank">
                {ico}
              </IconButton> 
            )}  
        </Typography>        
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            <Link target="_blank" href="https://yandex.ru/maps/-/CCUQrBSFGD">404130, Волжский, Комсомольская 20</Link>
        </Typography>
        <Copyright />
       
    </footer>   
    )
}