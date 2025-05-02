import { ThemeProvider } from './components/theme-provider';
import { Counter } from './components/Counter';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;