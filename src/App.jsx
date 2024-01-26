import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/CardUi";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="grid place-content-center h-screen mx-auto p-10">
        <div className="w-1/4">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;


// <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
//           <ThemeBtn />
//           <div className="w-full max-w-sm mx-auto"></div>
//           <Card />
