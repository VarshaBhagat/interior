import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CustomAccordion from './shared/Accordion';
import Title from './shared/Title';
import Slider from './shared/Slider';
import image from './img/icon.jpeg';
import './App.css';
import { design } from './data/modular'

const App = () => (
  <>
    <Grid container className="header">
      <Grid item xs={6} sm={9} container alignItems="center">
          <img 
            src={image}
            className="logo"
          />
      </Grid>
      <Grid container item xs={6} sm={3} className="quote" justifyContent="center" alignItems="center">
        <Typography variant="p">
          <a href="mailto:someone@example.com" className='freeQuote'>Get Free Quote</a>
        </Typography>
      </Grid>
    </Grid>
    <section className="section1"></section>
    <section>
      <Box sx={{mt:2}}>
        <Grid flexDirection="column" justifyContent="space-evenly">
          <Title title="What do we offer?"></Title>
          <CustomAccordion
            name="panel1"
            header="MODULAR" 
            title="KITCHEN | STORAGE | WARDROBE " 
            content={design.modular}
          />
          <CustomAccordion
            name="panel2"
            header="FURNITURE" 
            title="BEDS | SOFA |  STORAGE | SEATING | TABLES | POOJA UNIT" 
            content={design.furniture}
          />
          <CustomAccordion
            name="panel3"
            header="HOME IMPROVEMENT SERVICES" 
            title="FALSE CEILING | PAINTING | FLOORING " 
            content={design.homeImporvementService}
          />
        </Grid>
      </Box>
    </section>
     <section>

      <Title title="What do we design?"></Title>
      <Slider />
    </section>
    <footer className='footer'>
      <Typography variant='p' gutterBottom>
        © 2022 wood-mark-interiors.in All Rights Reserved.
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        About Wood Mark Interiors - Wood Mark Interiors is the world’s largest interior design and home renovation platform that connects interior designers, 
        homeowners and vendors. We provide homeowners with personalised and efficient home interior designs. 
        Our interior designers provide end to end services across various kinds of home interior needs- full home interiors, 
        modular kitchens, wardrobes and storages, living rooms, renovations and more. Having made over 20,000 customers happy by delivering their dream homes to them. 
        we’re the largest design community India has seen. Explore from among thousands of interior designs, 
        get free estimates and talk to our designers- Wood Mark Interiors serves as the one stop destination for all things home interiors.
      </Typography>
      <Typography variant='h6' gutterBottom>Contact Us: abc@gmail.com</Typography>
    </footer> 
  </>
)

export default App;
