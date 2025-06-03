export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 border-b">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              About Our Blog
            </h1>
            <p className="text-gray-600 text-lg">
              Welcome to our community-driven platform where ideas come to life.
            </p>
          </div>

          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of sharing knowledge and experiences.
                Our platform provides a space for writers, thinkers, and
                creators to share their stories and connect with like-minded
                individuals from around the world.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Rich Content
                  </h3>
                  <p className="text-gray-600">
                    Discover articles, stories, and insights from our diverse
                    community of writers and contributors.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Community Engagement
                  </h3>
                  <p className="text-gray-600">
                    Join discussions, share your thoughts, and connect with
                    other members through comments and reactions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Easy Publishing
                  </h3>
                  <p className="text-gray-600">
                    Share your stories with our user-friendly publishing tools
                    and reach a global audience.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Quality Content
                  </h3>
                  <p className="text-gray-600">
                    We maintain high standards for content quality and ensure a
                    positive environment for all users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Team
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a dedicated team of professionals passionate about
                creating a platform where ideas can flourish and communities can
                grow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">Content Director</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Mike Johnson
                  </h3>
                  <p className="text-gray-600">Community Manager</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-4">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  Join Our Team
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
