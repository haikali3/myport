export default function AboutMe() {
  return (
    <main
      key="1"
      className=" bg-white flex flex-col justify-between overflow-y-auto"
    >
      <section className="py-12 mx-auto max-w-3xl">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-black ">
            About Me
          </h2>
          <p className="text-xs lg:text-lg mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-900 pl-8 pr-8">
            I am a passionate developer with a keen eye for design. I love to
            create innovative solutions and push the boundaries of technology. I
            have a strong background in both front-end and back-end development,
            and I am always eager to learn new technologies and improve my
            skills. I believe in the power of teamwork and collaboration, and I
            strive to bring a positive and enthusiastic attitude to every
            project I work on.
          </p>
        </div>
      </section>
    </main>
  );
}
