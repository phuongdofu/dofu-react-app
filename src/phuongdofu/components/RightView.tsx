import * as React from 'react';
// import { useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Customers from 'phuongdofu/section/Customer';
import KnowledgeBase from 'phuongdofu/section/KnowledgeBase';
import AssignedReps from 'phuongdofu/section/AssignedRep';
import Product from 'phuongdofu/section/Product';
import Attachments from 'phuongdofu/section/Attachments';

import MainCard from 'components/MainCard';


const RightView = () => {

  const moduleRowsData = [
      { 
        id: 1, 
        title: "Customers", 
        module: <Customers />, 
        state: "panel1", 
        header: "panel1a-header", 
        content: "panel1a-content", 
        icon: <ExpandMoreIcon /> 
      },
      { 
        id: 2, 
        title: "Knowledge Base", 
        module: <KnowledgeBase />, 
        state: "panel2", 
        header: "panel2a-header", 
        content: "panel2a-content", 
        icon: <ExpandMoreIcon /> 
      },
      { 
        id: 3, 
        title: "Assigned Reps", 
        module: <AssignedReps />, 
        state: "panel3", 
        header: "panel3a-header", 
        content: "panel3a-content", 
        icon: <ExpandMoreIcon /> 
      },
      { 
        id: 4, 
        title: "Product",
        module: <Product />, 
        state: "panel4", 
        header: "panel4a-header", 
        content: "panel4a-content", 
        icon: <ExpandMoreIcon /> 
      },
      { 
        id: 5, 
        title: "Attachments", 
        module: <Attachments />, 
        state: "panel5", 
        header: "panel5a-header", 
        content: "panel5a-content", 
        icon: <ExpandMoreIcon /> 
      },
  ]
  
  return (
    <MainCard title="Custom">
      <>
        {moduleRowsData.map(item => (
        <Accordion expanded>
          <AccordionSummary
            aria-controls={item.content}
            id={item.header}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.module}
          </AccordionDetails>
        </Accordion>
        ))}
      </>
    </MainCard>
  );
};

export default RightView;