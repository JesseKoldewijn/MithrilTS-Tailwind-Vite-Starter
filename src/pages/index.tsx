const Home = () => {
  return {
    controller: () => {},
    view: () => {
      return (
        <div class="flex min-h-screen flex-col justify-center gap-2 text-center">
          <h1 class="text-4xl font-extrabold text-gray-300">Welcome</h1>
          <h3 class="text-xl font-light">And as always...Hello World!</h3>
        </div>
      );
    },
  };
};
export default Home;
