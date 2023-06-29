import { FaFacebookSquare,FaMailBulk,FaTwitter,FaInstagramSquare } from "react-icons/fa";
function ContactUs() {
  return (
    <div className="ContactUs">
      <div className="ContactContent">
        <h2>Get intouch with Us</h2>
        <p>
          Get informed and equipped by the rich and resourced Agriconnect
          application. Feel free to ask any question through our social media
          platforms
        </p>
        <div style={{display:'flex',justifyContent:'center',gap:'1rem'}}>  <h3><FaFacebookSquare/></h3>
        <h3><FaMailBulk/></h3>
        <h3><FaTwitter/></h3>
        <h3><FaInstagramSquare/></h3>

        </div>
      <p>Agriconnect waptech Limited</p>
      </div>
    </div>
  );
}
export default ContactUs;
