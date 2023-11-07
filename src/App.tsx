import { Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { AuthorizationPageAsync } from "./pages/AuthorizationPage/AuthorizationPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

function App() {
  return (
    <div>
      <NavLink to={"/"}>Главная</NavLink>
      <NavLink to={"/authorization"}>Авторизация</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/authorization"} element={<AuthorizationPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
