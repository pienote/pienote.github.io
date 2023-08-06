import pic from './pic.png';
import './Home.css'

export default function Home() {
    return(
        <div className="Home">
            <h1> Welcome to my website! </h1>
            <img src={pic} alt="Me" style={{width:"33%", height:"33%"}}/>
            <h2> Hi, my name is Phil. <br/> I graduated RPI with a Master's degree in Information Technology in May 2023. In addition, I also graduated RPI last year with a dual major in Computer Science and Information Technology and Web Sciences with cum laude. Currently, I am seeking a full-time opportunity in either the software engineering field or data science. </h2>
            <br/>
            <br/>
            <br/>
        </div>
    );
}
