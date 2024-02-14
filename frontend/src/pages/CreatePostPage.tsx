import {
  Box,
  Button,
  Card,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const CreatePostPage = () => {
  const [age, setAge] = useState("");
  const [image, setImage] = useState<any>(null);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container>
      <Main>
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            New Posting
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="Title"
              type="text"
              id="title"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="카테고리"
              type="text"
              id="category"
              autoFocus
            />

            <Card>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {image && (
                <CardMedia
                  component="img"
                  height="300px"
                  image={image}
                  alt="Your image"
                />
              )}
            </Card>

            <TextField
              label="포스트 내용 작성"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              style={{ height: "100px" }}
              sx={{ mt: "20px" }}
            />

            <Button type="button" fullWidth variant="contained" sx={{ mt: 10 }}>
              포스팅 등록
            </Button>
          </Box>
        </Box>
      </Main>
    </Container>
  );
};

const Container = styled.div``;
const Main = styled.div``;

export default CreatePostPage;
