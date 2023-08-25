import "./QRcode.css"
import image from "../images/image-qr-code.png"

const QRcode = () => {
  return (
    <div className="qr-component">
        <img src={image} alt=""/>
        <h2>Improve your front-end<br/>skills by building projects</h2>
        <p>Scan the QR code to visit Frontend<br/> Mentor and take your coding skills to<br/> the next level</p>
    </div>
  )
}

export default QRcode