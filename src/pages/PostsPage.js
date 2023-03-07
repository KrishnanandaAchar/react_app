import React, { Suspense } from "react";

// 3rd Party Librariers
import { Container, Row, Col } from "react-bootstrap";

// components
const LazyLoadedPosts = React.lazy(() => import("../components/Posts"));

const PostsPage = () => (
    <Container fluid>
        <Row>
            <Col>
                <Suspense fallback={<h1>Loadiing...</h1>}>
                    <LazyLoadedPosts />
                </Suspense>
            </Col>
        </Row>
    </Container>
);

export default PostsPage;
