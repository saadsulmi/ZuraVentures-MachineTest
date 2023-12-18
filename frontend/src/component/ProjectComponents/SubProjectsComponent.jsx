import { useNavigate } from "react-router-dom";

const SubProjectsComponent = ({ subProjects, deleteHandler }) => {
  const navigate = useNavigate();
  const dateAndTime = (timestamp) => {
    const dateObject = new Date(timestamp);

    const day = dateObject.getDate().toString().padStart(2, "0");
    const monthAbbreviation = new Intl.DateTimeFormat("en", {
      month: "short",
    }).format(dateObject);
    const yearShort = dateObject.getFullYear().toString().slice(-2);

    const formattedDate = `${day} ${monthAbbreviation} ${yearShort}`;

    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    return `${formattedDate} | ${formattedTime}`;
  };
  return (
    <>
      <div className="w-full h-14 bg-blue-800 rounded-lg flex items-center justify-between px-2 lg:px-8 mb-2">
        <h1 className="text-sm lg:text-md text-white">
          All files are processed! Your widget is ready to go!
        </h1>
        <button className="w-36 h-10 rounded-lg bg-white">Try it out!</button>
      </div>
      <div className="w-full shadow-md overflow-auto max-h-[300px] flex flex-col items-center border-2 rounded-lg border-gray-300 p-1 myscroll">
        <table className="table-fixed w-full ">
          <thead className="w-full pt-3">
            <tr className="h-[50px] font-bold text-gray-700 ">
              <th className="w-3/12">Name</th>
              <th className="w-4/12">Upload Date & Time</th>
              <th className="w-2/12">Status</th>
              <th className="w-3/12">Actions</th>
            </tr>
            <hr className="h-[1px] border-0 w-full" />
          </thead>
          <tbody className="w-full ">
            {subProjects.map((val, key) => {
              return (
                <tr
                  key={key}
                  className="h-[45px] font-semibold text-gray-700 mt-2 border-t-2 border-gray-200"
                >
                  <td className=" text-center ">{val.filename}</td>
                  <td className=" text-center ">
                    {dateAndTime(val.updatedAt)}
                  </td>
                  <td className=" text-center ">{`${
                    val.status ? "Done" : "Processing"
                  }`}</td>
                  <td className="text-center">
                    <button
                      className="w-1/4 h-8 border duration-200 border-r-0 rounded-l-lg border-gray-300 hover:bg-blue-500 hover:text-white"
                      onClick={() => {
                        navigate(`/projects/edit/${val._id}`);
                      }}
                    >
                      edit
                    </button>
                    <button
                      className="w-1/4 h-8 border duration-200 border-gray-300 rounded-r-lg hover:bg-red-600 hover:text-white"
                      onClick={() => {
                        deleteHandler(val._id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubProjectsComponent;
