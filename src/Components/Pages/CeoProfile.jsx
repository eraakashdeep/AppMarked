import React from "react";
import { Helmet } from "react-helmet";

const CeoProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Helmet>
        <title>Aakash Deep - CEO of AppMarked</title>
        <meta
          name="description"
          content="Business profile of Aakash Deep, CEO of AppMarked — innovator, entrepreneur, and tech visionary."
        />
        <meta
          name="keywords"
          content="Aakash Deep, AppMarked, CEO, startup, business leader, entrepreneur, AI company"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left Sidebar - Quick Info */}
          <aside className="bg-white shadow-md rounded-xl p-6 md:col-span-1">
            <img
              src="https://via.placeholder.com/200"
              alt="Aakash Deep"
              className="rounded-xl shadow mb-4"
            />
            <h2 className="text-2xl font-semibold">Aakash Deep</h2>
            <p className="text-sm text-gray-600 mb-2">CEO, AppMarked</p>
            <hr className="my-4" />
            <ul className="text-sm space-y-2">
              <li><strong>Born:</strong> December 27, 1999</li>
              <li><strong>Nationality:</strong> Asian</li>
              <li><strong>Alma Mater:</strong> KIIT UNIVERSITY</li>
              <li><strong>Founded:</strong> AppMarked (2021)</li>
              <li><strong>Net Worth:</strong> $10T (estimated)</li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/johndoe" className="text-blue-600">Aakash Deep</a></li>
            </ul>
          </aside>

          {/* Right Side - Biography and Details */}
          <section className="md:col-span-2 space-y-8">

            <div>
              <h1 className="text-4xl font-bold mb-2">Aakash Deep</h1>
              <p className="text-lg text-gray-700">
                Aakash Deep is a prominent Asian entrepreneur, investor, and the CEO of AppMarked, a
                Silicon Valley-based company specializing in AI-driven enterprise automation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Early Life & Education</h2>
              <p>
                Born and raised in San Francisco, California, John developed a passion for technology
                at a young age. He earned his Bachelor's degree in Computer Science from Stanford University
                in 2007. During college, he interned at Google and later contributed to several open-source projects.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Career</h2>
              <p>
                After a successful stint in product management at Google, John founded AppMarked in 2018.
                Under his leadership, the company raised over $50M in venture capital, served Fortune 500 clients,
                and launched several AI tools for process automation. John is known for his strategic foresight
                and innovation in AI ethics and application.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Media & Recognition</h2>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li><a href="https://www.forbes.com">Forbes: 30 Under 40 Tech Leaders</a></li>
                <li><a href="https://techcrunch.com">TechCrunch: CEO Talks AI and Business Growth</a></li>
                <li><a href="https://businessinsider.com">Business Insider: Startups to Watch</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>Email: <a href="mailto:john@AppMarked.com" className="text-blue-600">john@AppMarked.com</a></p>
              <p>Website: <a href="https://AppMarked.com" className="text-blue-600">www.AppMarked.com</a></p>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};

export default CeoProfile;
