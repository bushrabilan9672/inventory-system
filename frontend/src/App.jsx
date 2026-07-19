import AppRouter from "./app/routes/AppRouter";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppRouter />
      <Footer />
    </div>
  );
}