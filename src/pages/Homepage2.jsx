import React from "react";
import Latest from "../pages/Latest";
import ExploreServices from "../components/ExploreServices";
import InventoryOptimization from "../components/InventoryOptimization";

const Homepage2 = () => {
    return (
        <div className="relative">
            {/* Root container with strict overflow control */}
            <div className="fixed inset-0 overflow-auto">
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <ExploreServices />
                    <InventoryOptimization/>
                    <Latest />
                </div>
            </div>
        </div>
    );
};

export default Homepage2;