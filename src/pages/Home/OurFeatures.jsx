const OurFeatures = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h2 className="text-[#2F327D] text-4xl">
          Our <span className="text-[#00CBB8] text-xl">Features</span>
        </h2>
        <p className="mt-4">This very extraordinary feature, can make learning activities more efficient</p>
      </div>
      <div className="hero bg-base-200 py-8">
        <div className="hero-content flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <figure className="lg:flex gap-4">
              <img
                src="https://i.ibb.co/SKF3ZkN/image-12.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </figure>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              A <span className="text-[#00CBB8]">user interface</span> designed
              <br />
              for the classroom
            </h1>
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/YyxX30b/Group-72.png" alt="" />
              <p className="py-6">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/mC02wvn/Group-73.png" alt="" />
              <p className="py-6">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/Kw8fMcV/users-2.png" alt="" />
              <p className="py-6">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
