import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/hero/HeroScreen";

import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/navbar/NavBar";
import { SearchScreen } from "../components/search/SearchScreen";


export const DashBoard = () => {
    return (
    <>
        <Navbar/>
      <div className="container">

      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />

        <Route path="hero/:heroeId" element={<HeroScreen />} /> 

        <Route path="/search" element={<SearchScreen />} />

      </Routes>
      </div>
    </>
    )
}
