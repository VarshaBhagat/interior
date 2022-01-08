import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CustomAccordion from './shared/Accordion';
import Title from './shared/Title';
// import Slider from './shared/Slider';
import './App.css';

const modular =[
  {"key": 'Kitchen', "value":["Straight", "Parallel", "L-shape", "U-shape", "Island"]},
  {"key": 'Wardrobe', "value":["Sliding doors", "Swing doors"]},
  {"key":'Storage', "value":["TV units", "Sideboards" ,"Chest of drawers", "Shoe racks"]},
]

const App = () => (
  <>
    <Grid container className="header">
      <Grid item xs={6} sm={9}>
        <Box sx={{p:2}}>
          <img 
            src="https://images.livmatrix.com/w_400/https://d3gq2merok8n5r.cloudfront.net/bumblebee/logo_livspace.png"
            className="logo"
          />
        </Box>
      </Grid>
      <Grid container item xs={6} sm={3} className="quote" justifyContent="center" alignItems="center">
        <Typography variant="p">
          Get Free Quote
        </Typography>
      </Grid>
    </Grid>
    <section className="section1"></section>
    <section className="section">
      <Grid flexDirection="column" justifyContent="space-evenly">
        <Title title="What do we offer?"></Title>
        <CustomAccordion
          name="panel1"
          header="MODULAR" 
          title="KITCHEN | WARDROBE | STORAGE" 
          content={modular}
        />
      </Grid>
    </section>
    {/* <section className="section">
      <Title title="What do we design?"></Title>
      <Slider />
    </section> */}
  </>
)

export default App;
