const SubProjectsComponent = () => {
  return (
      <>
      <div className="w-full h-20 bg-blue-800 rounded-lg flex items-center justify-between px-8 mb-2">
        <h1 className="text-md text-white">All files are processed! Your widget is ready to go!</h1>
        <button className="w-36 h-10 rounded-lg bg-white">Try it out!</button>
      </div>
      <div className="w-full h-2/5 flex flex-col items-center border-2 rounded-xl border-gray-400 p-1">
        <div className="w-full flex justify-between">
          <h1 className="w-3/12 text-center font-medium">Name</h1>
          <h1 className="w-4/12 text-center font-medium">Upload date & time</h1>
          <h1 className="w-2/12 text-center font-medium">Status</h1>
          <h1 className="w-3/12 text-center font-medium">Actions</h1>
          <hr className="h-px mt-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
        </div>

      </div>
      </>
  )
}

export default SubProjectsComponent