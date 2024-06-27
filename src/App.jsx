import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./components/RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import RecipeListContainer from "./containers/RecipeListContainer";

function App() {
  return (
    <>
      <header>
        {/* <NavBar /> */}
        <Title />
      </header>
      <main>
        <RecipeListContainer />
        {/* <Search /> */}
      </main>
    </>
  );
}

export default App;
