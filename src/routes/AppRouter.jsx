import * as React from "react";
import { Routes, Route } from "react-router-dom";


import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoard } from "./DashBoard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    return (
    <div>
    

      <Routes>


        
        <Route path="/login" element={
        <PublicRoute>
          <LoginScreen/>
        </PublicRoute>} />



        <Route path="/*" element={
            <PrivateRoute>
                <DashBoard/> 

            </PrivateRoute>
                                  } />

      </Routes>
    </div>
    )
}
