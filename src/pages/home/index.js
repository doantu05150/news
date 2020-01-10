import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import MainLayout from '../../layout/MainLayout'
import Header from '../../components/common/Header'
import FormSocial from '../../components/home/FormSocial'

const HomeWrapper = styled.div`
  text-align: center;
`

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <HomeWrapper>
        <Container>
          <Row>
            <Col lg="2">1 of 3</Col>
            <Col>
              <FormSocial />
            </Col>
            <Col lg="3">3 of 3</Col>
          </Row>
        </Container>
      </HomeWrapper>
    </MainLayout>
  )
}
