
export const metadata = {
    title: "Privacy Policy | BunnX",
    description: "Read Bunnx's Privacy Policy to understand how we collect, use, and protect your personal data. We value your privacy and are committed to maintaining transparency and security in all our practices.",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
      canonical: "privacy-policy",
    },
  }
  

const PrivacyPolicy = () => {

    return (
        <>
            <section>
                <div className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-0 md:px-6 md:py-8">
                    <section
                        style={{ width: "100vw", maxWidth: "100%", display: "grid", placeItems: "center", backgroundColor: "white" }}
                        className="menu container mx-auto py-8 px-10"
                    >
                        {/* Introduction */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Privacy Policy
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and safeguard
                                your information when you use our software development services or hire developers through our platform.
                            </p>
                        </div>

                        {/* Information Collection */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Information We Collect
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                • Personal Information: When you inquire about or use our services, we may collect your name, email address,
                                phone number, and company details.
                            </p>
                            <p className="mb-4">
                                • Project Details: To provide the best solutions, we may request project-specific information, including
                                technical requirements, timelines, and budgets.
                            </p>
                            <p className="mb-4">
                                • Payment Information: For billing purposes, we collect payment details securely via trusted third-party
                                gateways.
                            </p>
                            <p className="mb-4">
                                • Usage Data: We may collect analytics data on how you use our platform to improve our services.
                            </p>
                        </div>

                        {/* Use of Information */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            How We Use Your Information
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                • To deliver customized software development solutions that meet your business goals.
                            </p>
                            <p className="mb-4">
                                • To facilitate the hiring of developers by matching your requirements with our expert talent pool.
                            </p>
                            <p className="mb-4">
                                • To process payments, communicate updates, and ensure the delivery of services.
                            </p>
                            <p className="mb-4">
                                • To comply with legal obligations and prevent fraudulent activities.
                            </p>
                        </div>

                        {/* Data Protection */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Data Protection & Security
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                We employ industry-standard security practices to protect your data, including encryption, firewalls, and
                                secure storage protocols. However, no system is entirely foolproof, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Third-Party Services */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Third-Party Services
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                We may share your information with trusted third-party partners for:
                            </p>
                            <ul className="list-disc ml-8">
                                <li>Payment processing</li>
                                <li>Project collaboration tools</li>
                                <li>Analytics and performance tracking</li>
                            </ul>
                            <p className="mb-4">
                                We ensure these partners adhere to strict privacy and security standards.
                            </p>
                        </div>

                        {/* Rights and Cancellations */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Your Rights & Order Cancellations
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                • You have the right to access, modify, or delete your personal information by contacting our support team.
                            </p>
                            <p className="mb-4">
                                • Orders for software development services can be canceled before the project begins. Any refunds for
                                cancellations will be processed within 7-10 business days.
                            </p>
                            <p className="mb-4">
                                • If hiring developers, cancellations must be communicated within the agreed trial period (if applicable).
                            </p>
                        </div>

                        {/* Updates */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Changes to This Policy
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
                                Any updates will be notified via email or our platform.
                            </p>
                        </div>

                        {/* Contact */}
                        <h3 className="block font-bold md:px-8 md:text-center py-2 border-b-2 border-b-[#fe6121] my-6 text-2xl">
                            Contact Us
                        </h3>
                        <div className="sm:px-8 text-justify">
                            <p className="mb-4">
                                If you have any questions regarding this Privacy Policy, please contact us at:
                                <br />
                                {/* Email: support@example.com
                                <br /> */}
                                Phone: +91-9971544661
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
