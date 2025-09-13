import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/bal.jpeg',
    darkImg: '/images/home/brand/bal.jpeg',
    title: 'balasore',
  },
  {
    image: '/images/home/brand/sal.jpg',
    darkImg: '/images/home/brand/sal.jpg',
    title: 'sal',
  },

   {
    image: '/images/home/brand/ragh.jpg',
    darkImg: '/images/home/brand/ragh.jpg',
    title: 'raghavendra',
  },

  {
    image: '/images/home/brand/gmr.jpeg',
    darkImg: '/images/home/brand/gmr.jpeg',
    title: 'gmr',
  },

    {
    image: '/images/home/brand/shy.jpg',
    darkImg: '/images/home/brand/shy.jpg',
    title: 'shyam',
  },
  {
    image: '/images/home/brand/tata.jpg',
    darkImg: '/images/home/brand/tata.jpg',
    title: 'tata',
  },
  {
    image: '/images/home/brand/fac.png',
    darkImg: '/images/home/brand/fac.png',
    title: 'facor',
  },

   {
    image: '/images/home/brand/vas.png',
    darkImg: '/images/home/brand/vas.png',
    title: 'vas',
  },
  {
    image: '/images/home/brand/rho.png',
    darkImg: '/images/home/brand/rho.png',
    title: 'rohit',
  },
  {
    image: '/images/home/brand/jin.png',
    darkImg: '/images/home/brand/jin.png',
    title: 'jindal',
  },

  {
    image: '/images/home/brand/145.jpg',
    darkImg: '/images/home/brand/145.jpg',
    title: 'andh',
  },

 
{
    image: '/images/home/brand/prak.jpg',
    darkImg: '/images/home/brand/prak.jpg',
    title: 'praka',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Material Intelligence \n and \nSelection',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Process Engineering\n & \nOptimization',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'Failure Analysis\n & \nReliability Engineering',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Testing,\n Auditing\n & \nCompliance',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Training\n and \nR&D Solutions',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'FlowBank',
    tag: ['UX Research', 'Interface Design'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Academy.co',
    tag: ['Product Design', 'Interaction Design'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Genome',
    tag: ['Brand identity design', 'UX Research'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Hotto',
    tag: ['Visual Storytelling', 'Web & Mobile Design'],
    link: 'https://www.wrappixel.com/',
  },
]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Materials Analysis',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Quality Control',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
   {
    image: '/images/home/result/innovation.svg',
    name: 'Technical Consulting',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
]

const startupPlanList: startupPlan[] = [
  /*{
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For companies who need design support. One request at a time',
    plan_price: '$2500',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
  },*/
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Consultation Fees',
    plan_descp: 'Ideal for solving production issues, evaluating plant improvements, or optimizing material usage.Perfect for startups, SMEs, or plants needing expert intervention without long-term contracts.',
    plan_price: '₹999',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'One-on-One Expert Session (30–45 mins)',
      'Initial Plant/Process Diagnostic',
      'Customized Advisory Report (PDF)',
      'Alternate Raw Material Suggestions',
      '₹500 Credit Towards Next Paid Service',
      'Pan-India & Global Consultation Availability',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'Who is behind this Metallurgy Consultancy?',
    faq_ans:
      'Our consultancy is led by Mr. A V L Narasimham, a veteran metallurgist with over five decades of experience in the ferro alloys and metals industry. He has held top technical leadership roles in FACOR, TATA Steel, Balasore Alloys, and more. He is also the author of a well-received industry book on Ferro Alloys Production.',
  },
  {
    faq_que: 'What services do you offer?',
    faq_ans:
      'We provide end-to-end metallurgical and plant consulting services including alloy design, furnace commissioning, process optimization, raw material substitution, cost-reduction techniques using waste materials, briquetting/pelletization, slag management, technical audits, and startup guidance.',
  },
  {
    faq_que: 'How much does a consultation cost?',
    faq_ans:
      'We are offering a limited-time inaugural consultation at just ₹999/-. This includes a 30-minute online session with our expert, initial review of your plant or problem, and actionable recommendations tailored to your setup.',
  },
  {
    faq_que: 'Which industries or companies do you serve?',
    faq_ans:
      'We serve ferro alloy plants, steel manufacturers, foundries, and smelting units. Our lead consultant has worked with clients across India in states like Odisha, Gujarat, Karnataka, and more, and consulted for overseas plants in Germany, Japan, UK, USA, South Africa, and others.',
  },
  {
    faq_que: 'What are your major achievements in the industry?',
    faq_ans:
      'We pioneered 100% briquette usage at FACOR, introduced cost-effective substitutes like Serpentinite and Pyroxynite, and implemented hot charge techniques at TATA Steel. Over 10+ technical papers have been presented by our founder, and our consultancy has guided startups and furnace commissioning projects across India.',
  },
  {
    faq_que: 'Do you provide in-person or on-site consultations?',
    faq_ans:
      'Yes. We offer both online consultations for quick support and in-person/on-site services for in-depth technical audits, troubleshooting, and commissioning support. Travel charges may apply depending on location and scope.',
  },
  {
    faq_que: 'How do I get started?',
    faq_ans:
      'Click on the "Get Consultation" button, submit your inquiry or plant details, and we will get back to you within one business day. You’ll receive expert guidance tailored to your operational needs — with clarity, speed, and precision.',
  },
  {
    faq_que: 'Is this suitable for small or mid-sized plants?',
    faq_ans:
      'Absolutely. Our services are scalable and cost-effective, making them ideal for small to mid-size units as well as high-capacity operations. We provide customized solutions that directly improve operational efficiency and cost control.',
  },
]


const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
