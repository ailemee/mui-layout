import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Grid, TextField } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

/* function StandardImageList2() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <Grid container spacing={3} p={"3px"}>
          <Grid item style={{}}>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "10%" }}
              />
            </ImageListItem>
          </Grid>
        </Grid>
      ))}
    </ImageList>
  );
} */

/* function StandardImageList() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        overflow: "auto",
        height: "80vh",
        "&::-webkit-scrollbar": {
          background: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#1976d2",
          borderRadius: 5,
        },
      }}
    >
      {itemData.map((item) => (
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 500,
              width: 500,
              borderRadius: 5,
            }}
          ></Box>
        </Grid>
      ))}
    </Grid>
  );
} */

function StandardImageList(e) {
  const filteredData = firstHalf.filter((data) => {
    if (e.input === "") {
      return data;
    } else {
      return data.title.toLowerCase().includes(e.input);
    }
  });

  return (
    <Grid
      container
      spacing={1}
      sx={{
        overflow: "auto",
        height: "60vh",
        "&::-webkit-scrollbar": {
          background: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#1976d2",
          borderRadius: 5,
        },
      }}
    >
      {filteredData.map((item, id) => (
        <Grid item xs={4} key={id}>
          <Box
            sx={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: {
                xs: 165,
                sm: 190,
                lg: 250,
              },
              width: {
                xs: 165,
                sm: 190,
                lg: 250,
              },
              borderRadius: 5,
            }}
          ></Box>
        </Grid>
      ))}
    </Grid>
  );
}

function StandardImageList2() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        overflow: "auto",
        height: "60vh",
        "&::-webkit-scrollbar": {
          background: "white",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#1976d2",
          borderRadius: 5,
        },
      }}
    >
      {newItemData[1].map((item, id) => (
        <Grid item xs={4} key={id}>
          <Box
            sx={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: {
                xs: 100,
                lg: 250,
              },
              width: {
                xs: 100,
                lg: 250,
              },
              borderRadius: 5,
            }}
          ></Box>
        </Grid>
      ))}
    </Grid>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
];

const half = Math.ceil(itemData.length / 2);

const firstHalf = itemData.slice(0, half);

firstHalf.reverse();

const secondHalf = itemData.slice(-half + 1);

secondHalf.sort();

const newItemData = [];

newItemData.push(firstHalf);

newItemData.push(secondHalf);

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab icon={<CollectionsIcon />} label="Gallery" {...a11yProps(0)} />
            <Tab
              icon={<CollectionsIcon />}
              label="Item Two"
              {...a11yProps(1)}
            />
            <Tab
              icon={<CollectionsIcon />}
              label="Item Three"
              {...a11yProps(2)}
            />
            <Tab
              icon={<CollectionsIcon />}
              label="Item Four"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TextField
            id="standard-search"
            onChange={handleInput}
            label="Search"
            type="search"
            variant="standard"
          />
          <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>
              <Box sx={{ height: "70vh" }}>
                <StandardImageList input={inputText} />
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              sx={{ display: { xs: "none", md: "none", lg: "block" } }}
            >
              <Box sx={{ height: "70vh" }}>
                <StandardImageList2 />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </Box>
  );
}
