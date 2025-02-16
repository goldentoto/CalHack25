"use client";
import React from "react";
import Header from "../../components/Header";
import TopCreations from "../../components/TopCreations";
import FilterButtons from "../../components/FilterButtons";
import FeaturedSection from "../../components/FeaturedSection";
import Footer from "@/components/Footer";

function CommunityPage() {
    return (
        <div className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
            <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
                <div className="w-full bg-gray-50 max-md:max-w-full">
                    <Header />
                    <TopCreations />
                    <FilterButtons />
                    <FeaturedSection />
                    <Footer />
                </div>
            </div>
        </div>
    );
} export default CommunityPage;
