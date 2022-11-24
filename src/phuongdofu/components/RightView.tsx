import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Customers from 'phuongdofu/section/Customer';
import KnowledgeBase from 'phuongdofu/section/KnowledgeBase';
import AssignedReps from 'phuongdofu/section/AssignedRep';


export default function RightView() {

  return (
    <div>
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Customers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Customers />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Knowledge Base</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <KnowledgeBase />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Assigned Rep</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AssignedReps />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}