const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <div className="text-yellow-600 text-xl font-normal mb-2">
        {subHeading}
      </div>

      <div className="text-neutral-900 text-4xl font-normal border-y-4 py-4">
        {heading}
      </div>
    </div>
  );
};

export default SectionTitle;
