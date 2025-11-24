import React from "react";
import { Link } from "react-router-dom";
import Latest from "../pages/Latest";
import ExploreServices from "../components/ExploreServices";
import LogisticsManagement from "../components/LogisticsManagement";
import InventoryOptimization from "../components/InventoryOptimization";
import SupplierNetwork from "../components/SupplierNetwork";
import WarehouseManagement from "../components/WarehouseManagement";

const Homepage2 = () => {
    return (
        <>
            <div>
                <WarehouseManagement/>
                <SupplierNetwork/>
                <InventoryOptimization/>
               <LogisticsManagement/>
                <ExploreServices />
                 <Latest />
            </div>
        </>
    );
};

export default Homepage2;
