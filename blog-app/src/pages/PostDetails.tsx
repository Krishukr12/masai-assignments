import { useLoaderData } from "react-router";
import type { BlogCardProps } from "../components/BlogCard";

import type { LoaderFunctionArgs } from "react-router-dom";

export const postDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data: BlogCardProps = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 border-b">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  <span>User {post.userId}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{post.views} views</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  {post.reactions.likes}
                </button>
                <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                  </svg>
                  {post.reactions.dislikes}
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{post.body}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <button className="hover:text-blue-600 transition-colors">
                  Share
                </button>
                <button className="hover:text-blue-600 transition-colors">
                  Save
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="hover:text-blue-600 transition-colors">
                  Report
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
