import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { Pagination } from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  // state={posts:[]}
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [postsPerPage] = useState(10);

  // request
  // runs when components mounts/updates (neverending loop)
  // add [] to avoid loop
  useEffect(() => {
    const fetchPosts = async () => {
      // process of fetching
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      // after fetching
      setLoading(false);
    };
    fetchPosts();
  }, []);
  //  get curr posts
  const indexOfLast = currPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currPosts = posts.slice(indexOfFirst, indexOfLast);

  // paginate funkcija
  const paginate = (pageNum) => {
    //pagenum je pagenumber iz pagination
    setCurrPage(pageNum);
  };
  return (
    <div className="App">
      <h1>Pagination</h1>
      <Posts posts={currPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
