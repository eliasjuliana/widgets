import Footer from "../Components/Footer";
import Calendar from "./Calendar";
import Chronometer from "./Chronometer";
import DateDisplay from "./DateDisplay";
import News from "./News";
import Notes from "./Notes";
import Timer from "./Timer";
import ToDo from "./ToDo";
import Weather from "./Weather";

const Home = () => {
  return (
    <main className="relative h-full">
      <h1 className="m-10 p-4 bg-black text-yellow-50 text-center text-6xl font-bold">
        Widgets
      </h1>

      <section className="bg-gray-800 text-white px-5 text-center mb-5">
        <DateDisplay/>
      </section>

      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 grid-auto-rows mx-10">
        <section className="px-2 mb-10 md:order-1 md:mb-0">
          <ToDo />
        </section>

        <section className="px-2 mb-10 col-span-2 md:order-4">
          <Notes />
        </section>

        <section className="px-2 mb-10 md:order-2">
          <Calendar />
        </section>

        <section className="px-2 mb-10 md:order-3 md:col-span-2 lg:col-span-1">
          <Weather />
        </section>

        <div className="md:order-5  w-80 md:flex lg:flex-col md:mx-auto">
          <section className="px-2 mb-10">
            <Timer />
          </section>

          <section className="px-2 mb-10">
            <Chronometer />
          </section>
        </div>

        <section className="px-2 mb-10 md:order-6 md:col-span-2 lg:col-span-3">
          <News />
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
