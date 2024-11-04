import { Completed_work } from "./(Home)/Completed_work";
import Hero from "./(Home)/Hero";

export default function Home() {
  return (
    <div className="bdr p-2 flex gap-5 flex-wrap min-h-[calc(100vh-120px)] items-center content-center">
      <Hero/>
      <Completed_work/>
    </div>
  );
}
