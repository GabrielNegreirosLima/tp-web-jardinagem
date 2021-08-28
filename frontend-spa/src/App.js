import Header from "./components/Header.js"
import AppRoutes from "./components/AppRoutes"
import Sidebar from "./components/Sidebar.js"

function App() {
  
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <AppRoutes />
    </div>
  );
}

export default App;
