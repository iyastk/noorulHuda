import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <div className="flex justify-center py-4 px-2">
      <div className="flex  gap-10 items-center justify-center max-w-xl text-white">
        <div className="flex flex-col h-96 w-96 items-center justify-center gap-7 p-4 bg-blue-800">
          <h2 className="text-3xl"> Our Mission</h2>
          <FaBullseye className="text-4xl text-black " />
          <p className="text-lg text-center ">
            To provide a nurturing and inclusive educational environment rooted
            in Islamic values.
          </p>
        </div>
        <div className="flex flex-col h-96 w-96 items-center justify-center  gap-7 p-4   bg-blue-800">
          <h2 className="text-3xl">Our Vision</h2>
          <FaEye className="text-4xl text-black" />
          <p className="text-lg text-center">
            To cultivate a generation of young Muslims deeply connected to their
            faith and committed to serving humanity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
