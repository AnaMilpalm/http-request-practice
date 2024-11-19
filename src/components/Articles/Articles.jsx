const Articles = ({articles}) => {
    return (
        <div>
            <ul>
                {articles.map(post =>
                 <li key={post.objecID}>
                    <a href={post.url}>{post.title}</a>
                 </li>
                )}
            </ul>

    </div>
    )
};

export default Articles;
