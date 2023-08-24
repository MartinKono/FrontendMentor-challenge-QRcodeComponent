import "./QRcode.css"
import image from "../images/image-qr-code.png"

const QRcode = () => {
  return (
    <div>
        <img id="image-qrcode" src={image} alt=""/>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default QRcode