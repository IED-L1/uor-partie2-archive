/**
* File Name: NavigationHeader.js
* Description: Navigation entre versions
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// Importation de la librairie React
import React from "react";

// Importation de la librairie React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importation des composants;
import NavigationHeaderBar from "./components/NavigationHeaderBar";
import VersioHTML from "./components/VersionHTML";

// Définition de la fonction NavigationHeader
function NavigationHeader() {
  return (
    //
    <>
      {/* composant de navigation */}
      <Router>
        <div>
      
          {/* Barre de navigation */}
          <NavigationHeaderBar />
      
          {/* definition des routes */}
          <Routes>
      
            {/* route vers la version HTML */}
            <Route path="/html" element={<VersioHTML />} />
      
          </Routes>
        </div>
      </Router>
    </>
  );
}

// Exportation du composant NavigationHeader
export default NavigationHeader;
