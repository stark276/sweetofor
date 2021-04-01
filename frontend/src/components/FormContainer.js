import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer({ children }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={8} md={6} lg={12}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer