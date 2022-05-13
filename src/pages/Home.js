import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';
import Chart from '../components/Chart';

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  height: "43vh",
};

const cardStyle2 = {
  display: "block",
  transitionDuration: "0.3s",
  height: "86vh",
  ["@media (max-width:600px)"]: {
    height: "43vh",
  }
};

const cardStyle3 = {
  display: "block",
  transitionDuration: "0.3s",
  height: "85%",
  ["@media (max-width:600px)"]: {
    height: "50%",
  }
};

const cardStyle4 = {
  display: "block",
  transitionDuration: "0.3s",
  height: "170%",
  ["@media (max-width:600px)"]: {
    marginTop: 0,
    height: "100%",
  }
};
export default function Home() {
  return (
    <div className="mainContainer">
      <div className="cardContent">
        <Grid container spacing={1} /* marginLeft={62} */ marginTop={7}> 
          <Grid item xs={12} sm={8} >
            <Card sx={cardStyle}>
              <CardContent>
                <Chart />
              </CardContent>
            </Card>
            <Card sx={cardStyle}>
              <CardContent>
                <Grid container spacing={0}> 
                  <Grid item xs={12} sm={8} >
                    <Card sx={cardStyle3}>
                      <CardContent>
                        <Typography>
                          1
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={cardStyle3}>
                      <CardContent>
                        <Typography>
                          2
                        </Typography>
                      </CardContent>
                    </Card> 
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card sx={cardStyle4}>
                      <CardContent>
                        <Typography>
                          3
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card> 
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={cardStyle2}>
              <CardContent>
                <Typography>
                  3
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
