import homeimg from "../../assets/homeimg.png";
import lock from "../../assets/lock.png"
import "./HomeDesktop.css"
export default function Home() {
  return (
    <>
    <div className="desktop_home">
      {/* <h1>Home</h1> */}
      <img src={homeimg} alt="home" />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online. <br /> Use
        Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <footer>
      <img src={lock} alt="lock" />
      <span>end-to-end encrypted</span>

      </footer>
    </div>
    
    </>
  );
}
