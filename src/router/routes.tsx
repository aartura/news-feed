import { Routes, Route } from "react-router-dom";

const routes = () => (
  <Routes>
    <Route path="/" element={<h1>Hello</h1>}></Route>
    <Route path="/test" element={<h1>Test</h1>}></Route>
  </Routes>
);

export default routes;
