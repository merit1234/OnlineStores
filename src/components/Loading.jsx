const Loading = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      <span className="ml-2 text-blue-600 font-semibold">Loading...</span>
    </div>
  );
};

export default Loading;