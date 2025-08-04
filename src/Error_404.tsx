function Error_404() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-xl">
          <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">
            🚧
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Error 404
          </h1>
          <p className="text-gray-600 mb-6">
            We’re working hard to bring you an awesome experience. Please check
            back soon.
          </p>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 365events. All rights reserved.
          </div>
        </div>
      </div>{" "}
    </main>
  );
}

export default Error_404;
