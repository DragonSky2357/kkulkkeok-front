import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { Fab } from "@mui/material";
import { Add, PlusOne } from "@mui/icons-material";
import { Link } from "react-router-dom";

const MainPage = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <Container>
      <PrimarySearchAppBar />

      <Main>
        {numbers.map((number, index) => (
          <Post />
        ))}
      </Main>
      <Link to="/new">
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 30, right: 30 }}
        >
          <Add />
        </Fab>
      </Link>
    </Container>
  );
};

const Container = styled.div``;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 30px;
  align-items: center;
  overflow-y: auto; /* 세로 방향 오버플로우 발생 시 스크롤바 표시 */
`;
export default MainPage;
