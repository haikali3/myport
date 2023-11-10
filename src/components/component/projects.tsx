export default function Projects() {
  return (
    <main
      key="1"
      className="min-h-screen bg-white flex flex-col justify-between overflow-y-auto"
    >
      <section id="projects" className="w-full py-20 mx-auto max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white justify-end">
          <div className="rounded overflow-hidden shadow-lg bg-white max-w-xs">
            <img
              alt="Project"
              className="w-full"
              height="300"
              src="/vercel.svg"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover',
              }}
              width="400"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">
                Project Title
              </div>
              <p className="text-gray-700 text-sm">
                This is a brief description of the project.
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white max-w-xs">
            <img
              alt="Project"
              className="w-full"
              height="300"
              src="/next.svg"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover',
              }}
              width="400"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">
                Project Title
              </div>
              <p className="text-gray-700 text-sm">
                This is a brief description of the project.
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg bg-white max-w-xs">
            <img
              alt="Project"
              className="w-full"
              height="300"
              src="/vercel.svg"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover',
              }}
              width="400"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">
                Project Title
              </div>
              <p className="text-gray-700 text-sm">
                This is a brief description of the project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
