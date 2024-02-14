import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const SignUpPage = () => {
  const [age, setAge] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" style={{ width: "25%" }}>
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="이름"
            type="text"
            id="username"
            autoFocus
          />
          <FormControl fullWidth>
            <InputLabel>성별</InputLabel>
            <Select
              id="demo-simple-select"
              value={age}
              label="성별"
              onChange={(event: SelectChangeEvent) =>
                setAge(event.target.value as string)
              }
            >
              <MenuItem value={"남"}>남</MenuItem>
              <MenuItem value={"여"}>여</MenuItem>
              <MenuItem value={"기타"}>기타</MenuItem>
            </Select>
          </FormControl>
          <Box display={"flex"}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="info"
              sx={{
                width: "30%",
                mt: 2,
                ml: "10px",
                fontSize: "14px",
              }}
            >
              중복 확인
            </Button>
          </Box>

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="password 확인"
            type="password"
            id="passwordConfirm"
          />

          <Link to="/signup">
            <Button type="button" fullWidth variant="contained" sx={{ mt: 2 }}>
              회원가입
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
