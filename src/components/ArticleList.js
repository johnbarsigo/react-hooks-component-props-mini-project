import Article from "./Article";

function ArticleList (posts) {

    const itemList = posts.posts;
    let postList = [];

    return (
        <main>
            {
                postList = itemList.map ( (item) => {
                    <Article key={posts.id} title={posts.title} date = {posts.date} preview = {posts.preview} />
                } )
            }
        </main>
    );
}

export default ArticleList;