import {React, useEffect} from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects">
            <ul>
                <li>
                <b>Twitter Ukraine Project</b> - clustered 10,000 tweets about the Russian-Ukrainian by performing different clustering methods on the MiniLM embeddings: k-means and HDBSCAN. Then it compares the coherence scores of the two different methods. Created using Python and utilizes libraries such as numpy, pandas, nltk, and scikit-learn. (<a target="_blank" href="https://github.com/pienote/DataAnalytics_A6_Philip_Chang">LINK</a>)
                </li>
                <li>
                <b>Crypto Arbitrage Dashboard</b> - a dashboard that takes advantage of the price differential of the same cryptocurrencies on two different decentralized exchanges and attempts to make a trade based on the difference for the purpose of profit. Made using HTML/JavaScript, as well as React, Node.js, and web3.js.
                </li>
                <li>
                <b>Tenafly High School GPA Calculator</b> - a Chrome extension that scrapes the values of the student's grade on the Genesis portal and calculates the grade based on the number of credits, placement, and letter grade. Made using JavaScript and HTML. (<a target="_blank" href="https://chrome.google.com/webstore/detail/tenafly-gpa-calculator/hhibfahkdabfjmieobhafkglmleommja?hl=en">LINK</a>)
                </li>
            </ul>
        </div>
    );
}

export default Projects;