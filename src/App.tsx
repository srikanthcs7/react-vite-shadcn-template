import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-4">
          It is base app! start crafting stellar apps
        </h1>
        <h3>Starting point for your next adventure</h3>
      </div>
    </ThemeProvider>
  );
}

export default App;
