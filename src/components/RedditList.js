import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../actions/redditActions";

const RedditList = () => {
    const selectedSubreddit = useSelector(state => state.selectedSubreddit)
    const reddit = useSelector(state => state.postsBySubreddit)
    const subreddit = reddit[selectedSubreddit]
    const dispatch = useDispatch()

    return <>
        <button onClick={() => dispatch(fetchPosts(selectedSubreddit))}>Refresh</button>
        <ul>
            {subreddit.items.map((post, index) => <Item post={post} key={index}/>)}
        </ul>
    </>;
}
export default RedditList

const Item = ({post}) => {
    return <li>{post.selftext}</li>
}