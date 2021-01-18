import React from "react";
import { FaBug } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/seo";

const Home = () => (
    //! Render Home UI
    <Layout>
        <SEO title="Home" description="Home Page" />

        <section className={styles.section}>

            <h4 className={styles.header}>
                <span className="mr-4">Good luck hacking!</span>
                <FaBug />
            </h4>
        </section>
    </Layout>
);

//! Styles
const styles = {
    section: "h-full flex flex-col justify-center items-center",
    image: "mb-4 w-2/5",
    header: "flex items-center font-semibold text-2xl",
};

export default Home;
