const MarketingDetails = () => {
  return (
    <div className="pb-10">
      <div className="carousel w-full h-[600px]">
        {/* Banner-1 */}
        <div className="carousel-item w-full">
          <img
            src="https://i.ibb.co/R30SSfv/5259642-b676.jpg"
            className="w-full rounded-xl"
          />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-4xl text-[#2F327D]">
          AWS Certified solutions Architect
        </h2>
        <p className="text-[#696984] text-2xl font-normal pt-4">
          AWS Certified Solutions Architect – Associate or Professional
          certification is often required.
        </p>
        <p className="text-[#696984] text-2xl font-normal py-4">
          Bachelor's degree in Computer Science, Information Technology, or
          related field (or equivalent work experience). Several years of
          experience in IT infrastructure, system administration, or software
          development, with a focus on AWS-based solutions.
        </p>
        <p className="text-[#696984] text-2xl font-normal">
        It's important to note that the specific qualifications and responsibilities can vary based on the level of the position (associate, mid-level, senior) and the requirements of the hiring organization. When applying for such positions, carefully review the job description provided by the employer to align your skills and experience with their requirements.
        </p>
      </div>
    </div>
  );
};

export default MarketingDetails;
