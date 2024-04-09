import {
  Banner,
  BookCar,
  ChooseUs,
  Download,
  Faq,
  Hero,
  PickCar,
  PlanTrip,
  Testimonials,
} from "@/components";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </>
  );
}

export default Home;
