import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ListStudents from '../ListStudents';
import ModalStudent from '../ModalStudent';
import { API_URL } from '../../config';

import './index.css';

type HomeProps = {};

const Home = (props: HomeProps) => {
  const [students, setStudents] = useState([]);

  const getStudents = () => {
    axios.get(API_URL).then((data) => setStudents(data.data));
  };

  useEffect(() => {
    getStudents();
  }, []);

  const resetState = () => {
    getStudents();
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <ListStudents students={students} resetState={resetState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalStudent create={true} resetState={resetState} isNewStudent={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
