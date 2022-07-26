import React from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { Cart } from "../Cart/Cart";

export const Main = () => {
  return (
    <div className="main">
      {
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route
            exact
            path="/tecnology/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route
            exact
            path="/costume/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route
            exact
            path="/jewelerys/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      }
    </div>
  );
};
