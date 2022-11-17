import * as React from 'react';
import { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabsProps } from 'types/e-commerce';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function TabPanel({ children, value, index, ...other }: TabsProps) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Instruction = () => {
    const steps = [
        'ToDo',
        'Doing',
        'On Hold',
        'Done'
      ];
    
    return (
        <Box>
        
        <Box sx={{ width: '100%', paddingBottom: "10px" }}>
        <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
        </Box>                                                                                                      

        <Box sx={{p: 2, border: "#d9d9d9 solid 1px",}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna urna.
        </Box>

        </Box>
        
    );
}

export default function TaskViewCenter() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Instruction" {...a11yProps(0)} />
          <Tab label="Timeline" {...a11yProps(1)} />
          <Tab label="Note" {...a11yProps(2)} />
          <Tab label="TeamChannel" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Instruction />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
}