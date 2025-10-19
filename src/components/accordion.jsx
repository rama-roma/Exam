import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
<div style={{ width: '900px', margin: '50px auto' }}>
      <Accordion
        sx={{
          backgroundColor: '#1E1E1E',
          color: '#EAEAEA',
          borderRadius: '12px',
          mb: 2,
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          '&:hover': {
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#00FFFF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 600 }}>
            Я никогда не занимался ни маркетингом, ни трафиком. У меня получится?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#2A2A2A',
            borderRadius: '0 0 12px 12px',
            fontSize: '16px',
            padding: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: '#1E1E1E',
          color: '#EAEAEA',
          borderRadius: '12px',
          mb: 2,
          boxShadow: '0 0 15px rgba(255, 0, 255, 0.2)',
          '&:before': { display: 'none' },
          '&:hover': {
            boxShadow: '0 0 25px rgba(255, 0, 255, 0.4)',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF00FF' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 600 }}>
           Как проходит процесс обучения? Возможно ли совмещать с основной работой?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#2A2A2A',
            borderRadius: '0 0 12px 12px',
            fontSize: '16px',
            padding: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: '#1E1E1E',
          color: '#EAEAEA',
          borderRadius: '12px',
          mb: 2,
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
          '&:before': { display: 'none' },
          '&:hover': {
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#00FFFF' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 600 }}>
            Я никогда не занимался ни маркетингом, ни трафиком. У меня получится?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#2A2A2A',
            borderRadius: '0 0 12px 12px',
            fontSize: '16px',
            padding: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: '#1E1E1E',
          color: '#EAEAEA',
          borderRadius: '12px',
          mb: 2,
          boxShadow: '0 0 15px rgba(255, 0, 255, 0.2)',
          '&:before': { display: 'none' },
          '&:hover': {
            boxShadow: '0 0 25px rgba(255, 0, 255, 0.4)',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF00FF' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 600 }}>
           Как проходит процесс обучения? Возможно ли совмещать с основной работой?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#2A2A2A',
            borderRadius: '0 0 12px 12px',
            fontSize: '16px',
            padding: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
  );
}
