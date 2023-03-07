// 3rd Party Librariers
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// components
import PostDetails from "../components/PostDetails";

const PostDetailsPage = () => {
    const { id: postId } = useParams();

    return (
        <Container fluid>
            <Row>
                <Col>
                    <PostDetails postId={postId} />
                </Col>
            </Row>
        </Container>
    );
};

export default PostDetailsPage;
