import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar,
    Container,
    Tabs, 
    Tab,     
    Box} from '@material-ui/core';


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box px={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
   
  },
  appbar: {
    alignItems: 'center',
  },
}));

export default function TabsWithElems({tabs}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.appbar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                      {tabs.map((tabb) => 
                        <Tab key={tabb.num} label={tabb.label} {...a11yProps(tabb.num)} />
                      )}                 
                   
                </Tabs>
            </AppBar>
              {tabs.map((tabb) => 
                <TabPanel key={tabb.num} value={value} index={tabb.num}>
                    {tabb.content}
                </TabPanel>                        
              )}
        </div>
    </Container>
  );
}
