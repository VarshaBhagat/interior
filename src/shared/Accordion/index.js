import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './index.css';

const CustomAccordion = ({name, content, header, title }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ m: 1 }}>
      <Accordion expanded={expanded === name} onChange={handleChange(name)} className={expanded !== name ? "accordion": "accordion open-accordion"}>
        <AccordionSummary
          expandIcon={<img src="https://images.livmatrix.com/ls_image/159808/direction.png" className="extend-img" />}
          aria-controls={name+"bh-content"}
          id={name+"bh-header"}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ width: '33%', flexShrink: 0 }} variant='p'>
                {header}
              </Typography>
            </Grid>
            <Grid item xs={6}>
                { expanded === name ? 
                  (<Typography sx={{ color: 'text.secondary' }} variant='p'>{title}</Typography>) 
                :
                  (content.map((i, index)=>(
                    <Box key={i.key+index}>
                      <Typography variant='div'>{i.key}</Typography>
                      <ul className='content-list-header'>
                        {
                          i.value.map((ele, index)=>(<li key={ele+index} className='content-list-item'>{ele},</li>))
                        }
                      </ul>
                    </Box>
                  )))
                }
            </Grid>
          </Grid>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
}

export default CustomAccordion;
