export default function NewsCard({ article }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl shadow-[0_6px_20px_rgba(30,58,138,0.6)] border border-gray-200 flex flex-col h-full ">
      <span className="flex justify-between items-center text-xs text-gray-900 mt-2 p-1 font-bold">{new Date(article.publishedAt).toLocaleDateString()}</span>
      <h2 className="text-lg font-bold mb-2 flex text-center justify-center">{article.title}</h2>
      <p className="text-gray-600 text-sm text-justify flex-grow">{article.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
        <span className="text-black mt-auto">{article.source.name}</span>
        <h4 className="text-lg font-bold mb-2 mt-auto">
          <a href={article.url} target="_blank" className="text-blue-600 hover: underline mt-auto">Explore More</a>
          </h4>
      </div>
    </div>
  );
}

