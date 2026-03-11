import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/layout/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import LandscapeLock from "./components/layout/LandscapeLock";

const App = () => {
  return (
    <>
      <LandscapeLock />
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
