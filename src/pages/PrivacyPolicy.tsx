import logo from "../assets/FAQ/Icon.svg";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-[97rem] mx-auto ">
      <div className="py-4 sm:py-8 px-7 flex-col flex gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-[2rem] text-[#1F2732] font-medium text-center">
            Privacy Policy
          </h1>
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-3xl  text-red font-semibold  text-center">
            Last Update 2/10/2023{" "}
          </h3>
          <img src={logo} alt="FAQ`s icon" />
        </div>
        <div className="p-2 text-sm font-normal text-[#696969] ">
            <p>When you join the YJOZ, you trust us with your information. That's not something we take lightly. We've written this privacy policy to help you know what data we collect from you, how we use it, and how we protect it for you. If you have any questions, please get in touch at  info@yjoz.com.</p>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white   ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">Information you submit through our app or website:</p>
            <p>1.1 Your name, ID, email address, phone number, a selfie photograph, address, or information about your employment or studies, which we require to verify your account.</p>
            <p>1.2 Information from communications made through the platform and other details about how you use the app and website.</p>
            <p>1.3 Information on how you use your phone:</p>
            <p className="ml-5">Mobile network, IP address, operating system, and phone settings.</p>
            <p>1.3 Information you give us permission to access on your phone:</p>
            <p className="ml-5">Photos and camera access for posting item photos, and geolocation for showing relevant items.</p>
            <p>1.4 Information from social media accounts:</p>
            <p className="ml-5"> Information from shared social media accounts or accounts used for signing up.</p>
            <p>1.5 Cookie information:</p>
            <p className="ml-5">By using the YJOZ website and/or app, you agree to our use of cookies, session, persistent, and third-party cookies are used for tracking user activity, improving the platform, and enhancing user experience. Cookies do not store banking details.</p>
            <p>You can disable cookies through your browser or phone settings, but it may affect your user experience.</p>

        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">→  2. Data Collection and Processing</p>
            <p>Yjoz Portal L.L.C ("Yjoz," "we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains what data we collect, how we process it, the purposes for which we process it, and how you can request the deletion of your data.</p>
            <p>2.1 Data Collection</p>
            <p>We collect the following personal information:</p>
            <ul className=" decoration-dotted ml-3 ">
                <li className=" decoration-dotted " >Full Name</li>
                <li>Email</li>
                <li>Mobile Number</li>
                <li>Address</li>
            </ul>
            <p>2.2 Data Processing</p>
            <p>We process your data for the following purposes:</p>
            <ul className=" decoration-dotted ml-3 ">
                <li className=" decoration-dotted " >Account Management: To manage your account on our platform.</li>
                <li>Developer Support Communication: To provide you with support and assistance related to our services.</li>
                <li>Providing and improving our services.</li>
                <li>Personalizing your experience.</li>
                <li>Analytics and research.</li>
                <li>Compliance with legal obligations.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
