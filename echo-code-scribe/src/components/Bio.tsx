
const Bio = () => {
  return (
    <div className="card mb-4">
      <div className="absolute top-12 left-12">
        <svg className="w-12 h-12 animate-spin-slow text-portfolio-salmon opacity-20" viewBox="0 0 100 100">
          <path
            d="M50,2.5c26.2,0,47.5,21.3,47.5,47.5S76.2,97.5,50,97.5S2.5,76.2,2.5,50S23.8,2.5,50,2.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
      <p className="max-w-xl text-lg">
        Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
      </p>
    </div>
  );
};

export default Bio;
