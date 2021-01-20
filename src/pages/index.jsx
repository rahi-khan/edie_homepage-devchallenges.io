import React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import Review from "../components/Review";
import SEO from "../components/SEO/seo";
import Services from "../components/Services/Services";

const Index = () => (
    //! Render Home UI
    <Layout>
        <SEO title="Home" description="Home Page" />

        <Hero />
        <div className={container}>
            <Services />
            <Review />
        </div>
    </Layout>
);

//! Styles

const { container } = {
    container: "container mx-auto px-5 md:px-32 pt-16",
};

export default Index;
