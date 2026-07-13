import FooterContactUs from "../footer/FooterContactUs";
import FooterLink from "../footer/FooterLink";

function Footer() {
  return (
    <footer className="px-5 py-8 text-xs bg-blue-200 ">
      <div className="grid grid-cols-3">
        <div>
          <h3 className="mb-3 text-sm font-bold">
            Customer <br /> Support
          </h3>
          <ul className="space-y-1">
            <FooterLink>FAQs</FooterLink>
            <FooterLink>Shipping & Returns</FooterLink>
            <FooterLink>Order Tracking</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold">Follow Us</h3>
          <ul className="space-y-1">
            <FooterLink>Facebook</FooterLink>
            <FooterLink>Instagram</FooterLink>
            <FooterLink>Twitter</FooterLink>
            <FooterLink>LinkedIn</FooterLink>
          </ul>
        </div>

        <FooterContactUs />
      </div>

      <div className="text-center text-gray-500 mt-7">
        <p>&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
