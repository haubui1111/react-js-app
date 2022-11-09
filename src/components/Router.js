import {
    BrowserRouter,
    Routes, Route
  } from "react-router-dom";
import List from './List';
import CreateForm from './Create';
import Update from './update';
import Table from './Table';

const Router = () => {
    return (
        <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/serviecs" element={<Table />} />
            <Route path="/" element={<CreateForm />} />
        </Routes>
    );
}

export default Router;