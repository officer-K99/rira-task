import Header from "./components/header";
import Card from "./components/card";
import Form from "./components/form";
import ConvertHistory from "./components/convertHistory";
import { useState } from "react";

export interface ConvertsType {
  rate: number;
  amount: number;
  type: string;
  result: number;
}

const App = () => {
  const [converts, setConverts] = useState<ConvertsType[]>([]);

  const addConvertHistoryHandler = (values: ConvertsType) => {
    setConverts((prev) => [...prev, values]);
  };
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#12141a]">
        <Card>
          <Form addConvert={addConvertHistoryHandler} />
        </Card>
        <ConvertHistory converts={converts} />
      </main>
    </>
  );
};

export default App;
