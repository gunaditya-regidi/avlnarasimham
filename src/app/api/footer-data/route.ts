import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "avlnarasimham",
        tagline: "Empowering businesses with innovative solutions. Let's create something amazing together.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    sitemap: {
        name: "Important Links",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/aboutus" },
            { name: "Our Services", url: "/ourservices" },
            { name: "Consultation", url: "/#pricing" },
            { name: "Interview", url: "/#lifejourney" }
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "#39-2-4/2, Muralinagar, Visakhapatnam, Andhra Pradesh - 530007",
        email: "avin1947@gmail.com  avinash1947@yahoo.com",
        phone: "0105 192 3556"
    },
    copyright: "©2025 A.V.L. Narasimham. All Rights Reserved | Designed & Developed by Digital Videos MSME"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};