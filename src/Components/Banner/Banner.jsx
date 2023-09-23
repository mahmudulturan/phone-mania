const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1TB520c/electronics-store-03.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md drop-shadow-xl">
            <h1 className="mb-5 text-5xl font-bold ">Phone Mania</h1>
            <p className="mb-5 shadow-inner">
              Discover Tech Haven, your ultimate mobile tech destination.
              Located centrally, we're your go-to for the latest smartphones.
              Committed to quality and innovation, we're the city's premier
              phone store.
            </p>
            <div className="join text-white">
              <input
                className="input bg-slate-300 border-none join-item"
                placeholder="Search phones..."
              />
              <button className="btn bg-slate-300 join-item border-none rounded-r-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
