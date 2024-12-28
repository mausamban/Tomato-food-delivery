import assets from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="footer min-h-[30vh] w-screen bg-zinc-900 text-white pt-4 py-10 px-[15vw]">
      <div className="footer-content border-b-2 border-white flex  justify-between pb-7">
        <div className="section1 w-[50%]">
          <img src={assets.logo} alt="company logo" className="my-4 h-7" />
          <p className="text-sm mb-4 opacity-60">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            deserunt nam id hic expedita molestias, saepe culpa in omnis ea
            laborum nihil corrupti odio rerum placeat alias nemo. Ad, maiores!
          </p>

          <div className="socials flex gap-2">
            <img src={assets.facebook_icon} className="h-7" alt="facebook" />
            <img src={assets.twitter_icon} className="h-7" alt="twitter" />
            <img src={assets.linkedin_icon} className="h-7" alt="LinkedIn" />
          </div>
        </div>
        <div className="section2">
          <h1 className="uppercase font-bold text-xl mb-3">COMPANY</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="section3">
          <h1 className="uppercase font-bold text-xl mb-3">GET IN TOUCH</h1>
          <p>+91-98765-43210</p>
          <p>abc123@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
