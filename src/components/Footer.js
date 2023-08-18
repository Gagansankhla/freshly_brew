import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Card, Button, TextField } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#383B3E",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="button" color="white" gutterBottom>
              <Link href="#" color={"inherit"}>
                View the Terms of Service
              </Link>
              <br />
            </Typography>
            <Typography variant="button" color="white" gutterBottom>
              <Link href="#" color={"inherit"}>
                Contact US
              </Link>
            </Typography>
            <br />
            <Typography variant="button" color="white" gutterBottom>
              <Link href="#" color={"inherit"}>
                Explore
              </Link>
            </Typography>
            <br />
            <Typography variant="button" color="white" gutterBottom>
              <Link href="#" color={"inherit"}>
                About Us
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                backgroundColor: "#ED2939",
                height: "170px",
                width: "1000px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "30px",
              }}
            >
              <Typography
                fontFamily="sans-serif"
                variant="h6"
                color="white"
                padding={2}
              >
                Stay updated with the latest movies
              </Typography>
              <Grid>
              <TextField
                sx={{
                  margin: "10px",
                  backgroundColor: "white",
                  color: "white",
                  borderRadius: "30rem",
                  width: "200px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30rem",
                  },
                }}
                label="Search"
                variant="outlined" // Use the outlined variant
                color="primary"
              />
              <Button sx={{margin:"10px", padding: "14px 19px",borderRadius: "48px"}} variant="contained">Submit</Button>
              </Grid>
            </Card>
            
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
