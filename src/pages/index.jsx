import React from "react";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/seo";

const Index = () => (
    //! Render Home UI
    <Layout>
        <SEO title="Home" description="Home Page" />

        <Hero />
    </Layout>
);

//! Styles

export default Index;
