import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function GalleryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://via.placeholder.com/300x200",
    title: "Bed",
  },
  {
    img: "https://via.placeholder.com/300x500",
    title: "Bed",
  },
  {
    img: "https://via.placeholder.com/300x200",
    title: "Bed",
  },
  {
    img: "https://via.placeholder.com/300x500",
    title: "Bed",
  },
  {
    img: "https://via.placeholder.com/300x500",
    title: "Bed",
  },
  {
    img: "https://via.placeholder.com/300x500",
    title: "Bed",
  },
];
