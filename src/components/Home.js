import pic from './pic.png';

export default function Home() {

    return(
        <div className="Home">
            <h1> Welcome to my website! </h1>
            <img src={pic} alt="Picture of me" style={{width:"50%", height:"50%"}}/>
            <h2> Hi, my name is Phil. <br/> I'm a master's student at RPI studying Information Technology expected to graduate in May 2023. </h2>
        </div>
    );
}