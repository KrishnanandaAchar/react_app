import { useEffect } from "react";

// Icons
import { FaRegEye, FaPenNib, FaTrashAlt } from "react-icons/fa";

// 3rd Party libraries
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { showAlert } from "../store/features/alertSlice";
import { startLoading, stoploading } from "../store/features/loaderSlice";
import { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } from "../store/features/PostsApi";

// Utils
import { RenderButton } from "../utils/common";

const Posts = () => {
    const dispatch = useDispatch();
    const [addContact, { isError: isAddPostError, error: addPostError, isSuccess: isAddPostSuccess }] = useAddPostMutation();
    const [updatePost] = useUpdatePostMutation();
    const [deletePost] = useDeletePostMutation();
    const { isLoading, isSuccess, isError, error, data, refetch } = useGetPostsQuery();
    const newPost = { userId: 11, title: "New Title", body: "New Body" };

    useEffect(() => {
        if (isLoading) {
            dispatch(startLoading());
        } else {
            dispatch(stoploading());
        }
    }, [isLoading]);
    useEffect(() => {
        if (!isLoading && isError) {
            dispatch(showAlert({ type: "error", msg: `${error.status} : ${error.error}` }));
        }
    }, [isError]);
    useEffect(() => {
        if (isAddPostError) {
            dispatch(showAlert({ type: "error", msg: `${addPostError.status} : ${addPostError.error}` }));
        }
    }, [isAddPostError]);
    useEffect(() => {
        if (isAddPostSuccess) {
            dispatch(showAlert({ type: "success", msg: "New Post Created Successfully!" }));
        }
    }, [isAddPostSuccess]);

    const handleAddPost = async () => {
        await addContact(newPost);
    };
    const handleUpdatePost = async (selectedPost) => {
        const post = { ...selectedPost };
        post.title = "Updated Title";
        post.body = "Updated Body";
        await updatePost(post);
    };
    const handleDeletePost = async (postId) => {
        await deletePost(postId);
    };

    return (
        <div className="posts-block my-3">
            <h1 className="p-3 mb-3 w-100 d-flex justify-content-between">
                <div>Posts</div>
                <div>
                    <RenderButton type="button" variant="light" buttonTitle="Reload Posts" onClick={() => refetch()} className="mx-1" />
                    <RenderButton type="button" variant="light" buttonTitle="Add Post" onClick={() => handleAddPost()} />
                </div>
            </h1>
            <Container>
                <Row>
                    {isSuccess &&
                        data.map((postData) => (
                            <Col xs={12} sm={4} md={3} key={postData.id}>
                                <div className="p-3 mb-3 post-block">
                                    <h3>{postData.title}</h3>
                                    <div className="d-flex">
                                        <Link to={`/posts/${postData.id}`}>
                                            <RenderButton type="button" variant="info" buttonTitle={<FaRegEye />} onClick={() => null} />
                                        </Link>
                                        <RenderButton type="button" variant="warning" buttonTitle={<FaPenNib />} onClick={() => handleUpdatePost(postData)} />
                                        <RenderButton type="button" variant="danger" buttonTitle={<FaTrashAlt />} onClick={() => handleDeletePost(postData.id)} />
                                    </div>
                                </div>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Posts;
