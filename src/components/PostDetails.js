/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party libraries
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { useGetPostQuery } from "../store/features/PostsApi";
import { startLoading, stoploading } from "../store/features/loaderSlice";

// Utils
import { RenderButton } from "../utils/common";

// Images
import postImage from "../images/post.png";

const PostDetails = (props) => {
    const dispatch = useDispatch();
    const { postId } = props;
    const { isLoading, isSuccess, data: postData } = useGetPostQuery(postId);

    useEffect(() => {
        if (isLoading) {
            dispatch(startLoading());
        } else {
            dispatch(stoploading());
        }
    }, [isLoading]);

    return (
        <div className="post-details-block my-3">
            <h1 className="p-3 mb-3 w-100 d-flex justify-content-between">
                <div>Post Details</div>
                <div>
                    <Link to="/posts">
                        <RenderButton type="button" variant="light" buttonTitle="Back to All Posts" onClick={() => null} />
                    </Link>
                </div>
            </h1>
            <Container>
                {isSuccess && (
                    <div className="d-flex flex-md-row flex-column">
                        <div className="p-1">
                            <img src={postImage} alt="Post Image" />
                        </div>
                        <div className="p-1">
                            <h3>{postData.title}</h3>
                            <p>User ID: {postData.userId}</p>
                            <p>{postData.body}</p>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

PostDetails.propTypes = {
    postId: PropTypes.string.isRequired,
};

export default PostDetails;
