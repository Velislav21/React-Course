import { useEffect, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

export function Posts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);

    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: (postId) => deletePost(postId),
    })

    const updateMutation = useMutation({
        mutationFn: (postId) => updatePost(postId),
    })

    useEffect(() => {
        if (currentPage < maxPostPage) {
            const nextPage = currentPage + 1

            queryClient.prefetchQuery({
                queryKey: ["posts", nextPage],
                queryFn: () => fetchPosts(nextPage)
            })
        }

    }, [currentPage, queryClient])

    const { data, isError, isLoading } = useQuery({
        queryKey: ["posts", currentPage], // when currentPage changes RQ will update the data
        queryFn: () => fetchPosts(currentPage),
        staleTime: 2000,
    });

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Something went wrong...</div>
    }

    return (
        <>
            <ul>
                {data.map((post) => (
                    <li
                        key={post.id}
                        className="post-title"
                        onClick={() => {
                            deleteMutation.reset();
                            updateMutation.reset();
                            setSelectedPost(post)
                        }
                        }
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="pages">
                <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage(prevPage => prevPage - 1)}>
                    Previous {currentPage}
                </button>
                <span>Page {currentPage}</span>
                <button
                    disabled={currentPage === maxPostPage}
                    onClick={() => setCurrentPage(prevPage => prevPage + 1)}>
                    Next {currentPage}
                </button>
            </div>
            <hr />
            {selectedPost && <PostDetail
                post={selectedPost}
                deleteMutation={deleteMutation}
                updateMutation={updateMutation} />}
        </>
    );
}