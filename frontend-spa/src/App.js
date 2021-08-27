import Header from "./components/Header.js"
import AppRoutes from "./components/AppRoutes"
import Login from "./components/screens/Login/"

function App() {
  
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Login/>
    </div>
  );
}

export default App;
