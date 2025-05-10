import { ArrowRight } from "lucide-react";

const articles = [
  {
    title:
      "Filing Solar Power Permits In 2020? Consider The Following Important Factors",
    author: "Mike Dooley",
    date: "Jan 20, 2020",
    image: "/LandingPage/RA1.jpg",
    description:
      "All of these factors are important to consider when permitting your solar system, and can help streamline your process. Take the time to consider...",
  },
  {
    title: "Rooftop Solar Sees Unprecedented Growth",
    author: "Mike Dooley",
    date: "Jan 20, 2020",
    image: "/LandingPage/RA2.jpg",
    description:
      "The rooftop solar segment witnessed remarkable growth, with 4.59 GW of new capacity installed in 2024, reflecting a 53% increase compared to 2023. This expansion was largely fueled by the PM Surya Ghar: Muft Bijli Yojana, which has led to over 850,000 rooftop installations across the country.",
  },
  {
    title: "Government Initiatives to Boost Domestic Manufacturing",
    author: "Mike Dooley",
    date: "Jan 20, 2020",
    image: "/LandingPage/RA3.jpg",
    description:
      "The Union Budget 2025 extended the Production-Linked Incentive (PLI) scheme for solar module manufacturing by five years, with an enhanced outlay of INR 24,000 crore. Additionally, customs duties on critical components like solar inverters and batteries have been reduced to lower project costs and promote domestic manufacturing.",
  },
];

export default function RecentArticles() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-green-600 font-semibold">News & Announcements</p>
        <h2 className="text-3xl font-bold mt-2">Recent Articles</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute bottom-2 right-2 text-sm bg-white bg-opacity-80 px-2 py-1 rounded">
                {article.date}
              </span>
            </div>
            <div className="p-5">
              <p className="text-green-600 text-sm font-medium mb-1">
                — Oil & Gas , Insights
              </p>
              <p className="text-gray-800 text-sm mb-1">{article.author}</p>
              <h3 className="text-lg font-semibold leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {article.description}
              </p>
              <button className="flex items-center gap-2 text-black font-semibold text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
                <ArrowRight className="w-4 h-4" />
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
