import React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/seo";
import Services from "../components/Services/Services";

const Index = () => (
    //! Render Home UI
    <Layout>
        <SEO title="Home" description="Home Page" />

        <Hero />
        <div className={container}>
            <Services />
        </div>
    </Layout>
);

//! Styles

const { container } = {
    container: "container mx-auto px-28 pt-16",
};

export default Index;
