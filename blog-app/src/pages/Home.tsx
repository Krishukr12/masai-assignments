import { Link, useLoaderData } from "react-router";
import { BlogCard, type BlogCardProps } from "../components/BlogCard";
import { useState } from "react";

export const homeLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data: BlogCardProps = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { posts } = useLoaderData();

  const filteredPost = searchText
    ? posts.filter((post: BlogCardProps) =>
        post.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : posts;
  return (
    <section className="">
      <section className="p-6 py-2">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          name="postname"
          className="p-2 outline-none shadow mt-1"
          placeholder="Search Blogs "
        />
      </section>
      <section className="grid grid-cols-3 gap-6 p-6">
        {filteredPost.length === 0 ? (
          <div className="col-span-3 text-center py-8 text-gray-600">
            No posts found matching your search criteria
          </div>
        ) : (
          filteredPost.map((post: BlogCardProps) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                tags={post.tags}
                reactions={post.reactions}
                views={post.views}
                userId={post.userId}
              />
            </Link>
          ))
        )}
      </section>
    </section>
  );
};
