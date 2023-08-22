import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-20 text-white">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50  pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="w-90">
          <div className="md:ml-10">
            <p className="text-white text-2xl font-normal leading-9 mb-2">
              Aug 20, 2023
            </p>
            <p className="text-white uppercase text-2xl font-normal leading-9 mb-1">
              Where can i get some?
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, ullam eveniet repudiandae quisquam totam, deserunt
              excepturi quidem nihil error nostrum blanditiis laboriosam illum
              accusantium modi, aspernatur reiciendis sed ad in.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-3">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
