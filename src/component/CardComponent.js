import { Avatar,  Card, CardContent, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const CardComponent = ({titel, count ,icon, link}) => (
  <Link to={link}>
  <Card sx={{margin:"1rem", width:"90%"}}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            {titel}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {count}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >

            {icon}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  </Link>
);
