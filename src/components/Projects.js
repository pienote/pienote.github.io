import {React, useEffect} from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects">
            <h1> PROJECTS </h1>
            <ul>
                <li>
                    <b>Twitter Ukraine Project</b> - clustered 10,000 tweets about the Russian-Ukrainian by performing different clustering methods on the MiniLM embeddings: k-means and HDBSCAN. Then it compares the coherence scores of the two different methods. Created using Python and utilizes libraries such as numpy, pandas, nltk, and scikit-learn. (<a target="_blank" href="https://github.com/pienote/DataAnalytics_A6_Philip_Chang">LINK</a>)
                </li>
                <li>
                    <b>Optimal Renewable Energy Locations in Africa</b> - This group project's purpose was to look for suitable areas to foster the growth of renewable energy development for solar and wind power generation in the continent of Africa using the NASA POWER project dataset and displaying onto a website as well as conflict data such as wars and uprisings. I performed different clustering techniques onto the solar and wind data. Website was made in HTML, JavaScript, and utilizes the Leaflet.js library. Data crunching was done in Python using scikit-learn and pandas.
                    (<a target="_blank" href="https://jlioanag.github.io/Xinfo2023-Map/">LINK</a>, <a target="_blank" href="https://github.com/jlioanag/Xinfo2023-Map/">SOURCE</a>)
                </li>
                <li>
                    <b>Crypto Arbitrage Dashboard</b> - a dashboard that takes advantage of the price differential of the same cryptocurrencies on two different decentralized exchanges and attempts to make a trade based on the difference for the purpose of profit. Made using HTML/JavaScript, as well as React, Node.js, and web3.js.
                </li>
                <li>
                    <b>LingoLand</b> - This group project is to aid with the language learning process by providing the user with relevant and interesting news articles in the foreign language of choice. The user can create flashcards of new vocabulary and uses the spaced learning algorithm to quiz the user. This project was created using HTML, jQuery, PHP, and SQL. I worked on the authentification and authorization part.
                </li>
                <li>
                    <b>Tenafly High School GPA Calculator</b> - a Chrome extension that scrapes the values of the student's grade on the Genesis portal and calculates the grade based on the number of credits, placement, and letter grade. Made using JavaScript and HTML. (<a target="_blank" href="https://chrome.google.com/webstore/detail/tenafly-gpa-calculator/hhibfahkdabfjmieobhafkglmleommja?hl=en">LINK</a>, <a target="_blank" href="https://github.com/pienote/gpa-calculator">SOURCE</a>)
                </li>
            </ul>
        </div>
    );
}

export default Projects;