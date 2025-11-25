import React from "react";
import { Link } from "react-router-dom";
import Latest from "../pages/Latest";
import ExploreServices from "../components/ExploreServices";
import LogisticsManagement from "../components/LogisticsManagement";
import InventoryOptimization from "../components/InventoryOptimization";


const Homepage2 = () => {
    return (
        <>
            <div>
                <ExploreServices />
                <InventoryOptimization/>
               <LogisticsManagement/>
               
                 <Latest />
            </div>
        </>
    );
};

export default Homepage2;
