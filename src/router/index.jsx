// router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import Layout from "../layout/Layout";


async function charactersLoader() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    try{
        const data = await response.json();
        return data.results;
    }
    catch(error){
        console.error("Mensaje de error: ", error)
    }
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/characters",
                element: <Characters />,
                loader: charactersLoader
            }
        ]
    }
]);
