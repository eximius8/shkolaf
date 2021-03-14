import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem   
  } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SettingsModal } from '@n3/react-vision-panel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { 
  defaultGetSettings,
} from '@n3/react-vision-panel';



const settings = defaultGetSettings();


  
  const headersData = [
    {
      label: "Главная",
      href: "/react/",
    },
    {
      label: "Спортсменам",
      href: "/react/sportsmen",
    },
    {
      label: "Партнерам",
      href: "/react/partners",
    },
    {
      label: "Тренерский состав",
      href: "/react/trainers",
    },
    {
      label: "Об организации",
      href: "/react/about",
    }
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#de2f1e",
      paddingRight: "0px",
      paddingLeft: "79px",
      zIndex: 1039,
      "@media (max-width: 900px)": {
        paddingLeft: 0,        
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "right",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    toolbarButtons: {
      marginLeft: 'auto',
    },
  }));
  
  export default function Header() {
    const { header,  menuButton, toolbar, drawerContainer, logo } = useStyles();
    const [vispanel, setVisPanel] = useState(false);
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        console.log(settings);
       
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (   
        <Toolbar className={toolbar}>            
            <div>{getMenuButtons()}</div>
            <IconButton className={logo}         
              onClick={() => setVisPanel(!vispanel)}
            >
              <VisibilityIcon />
            </IconButton>          
        </Toolbar> 
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar className={toolbar} >
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >  
            <div className={drawerContainer}>{getDrawerChoices()}</div>                  
          </Drawer>  


          <IconButton            
              className={logo}
              onClick={() => setVisPanel(!vispanel)}
            >
              <VisibilityIcon />
          </IconButton>    
                 
          
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {      
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    }; 

  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (   
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}  
          <SettingsModal
                show={vispanel}
                onHide={() => setVisPanel(false)}
          />        
        </AppBar>
        
                  
      </header>
    );
  }