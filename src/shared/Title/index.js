import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '24px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '32px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '56px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '64px',
    },
  },
}));

const Title = ({title}) => {
  const classes = useStyles();
  return (
    <Box sx={{ p: 4, mt:4 }}>
      <Typography variant="h5" gutterBottom align="center" className={classes.root}>
        {title}
      </Typography>
    </Box>
  )
}

export default Title;
