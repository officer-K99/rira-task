import Header from "./components/header";
import Card from "./components/card";
import Form from "./components/form";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center gap-8 bg-[#12141a] px-6 py-10">
        <Card>
          <Form />
        </Card>
      </main>
    </>
  );
};

export default App;
