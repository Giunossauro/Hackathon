import React from "react";
import { Link } from "react-router-dom"
import "../styles/Search.css";
import { useState } from "react";
import "../styles/Search.css";
import Navbar from "../components/Navbar.js"
import ProcuraSearch from "../components/ProcuraSearch.js"
import ResultadoSearch from "../components/ResultadoSearch.js"



const Search = () => {


    return (
        <>

            <Navbar />

            <div className="cointeinerSearch">


                <ProcuraSearch />
               

                <ResultadoSearch />

            </div>

        </>
    );
}

export default Search;