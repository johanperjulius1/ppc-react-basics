import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="/nya-casinon" element={<Index />} />
      <Route path="/casino-med-swish" element={<Index />} />
      <Route path="/casino-med-bonus" element={<Index />} />
      <Route path="/casino-med-bonus-utan-omsattningskrav" element={<Index />} />
      <Route path="/casino-med-free-spins" element={<Index />} />
      <Route path="/casino-med-free-spins-utan-krav" element={<Index />} />
      <Route path="/casino-med-bankid" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
