import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


export default function Instruction() {
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
};