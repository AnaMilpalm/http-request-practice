const Articles = ({ articles}) => {
    return (
        <div>
         <ul>
            {articles.map(post => (
                
                <li key={post.objectID}>
                    <a href={post.url} target="_blank">{post.title}</a>
                </li>
            ))}
         </ul>
    </div>
    );
};

export default Articles;
