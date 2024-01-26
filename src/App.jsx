import "./App.css";
import Card from "./components/CardUi";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-1/4">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn/>
          <div className="w-full max-w-sm mx-auto"></div>
          <Card/>
        </div>
      </div>
    </>
  );
}

export default App;
