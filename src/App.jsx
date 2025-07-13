import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <p className="text-2xl text-orange-600">hello react</p>
    </>
  );
}

export default App;
