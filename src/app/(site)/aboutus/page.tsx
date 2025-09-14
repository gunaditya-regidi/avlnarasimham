'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function AboutUsContent() {
  const images = [
    '/images/home/about/1.jpeg',
    '/images/home/about/2.jpeg',
    '/images/home/about/3.jpeg',
    '/images/home/about/4.jpeg',
    '/images/home/about/5.jpeg',
    '/images/home/about/6.jpeg',
  ]

  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10">
            <h1 className="md:text-6xl text-4xl font-medium text-center">
              <span className="text-purple-600">About Us</span>
            </h1>

            <div className="flex flex-col gap-8">

              {/* About Us */}
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                <h2 className="text-2xl mx-auto text-align-center font-semibold mb-3">Metallurgical Consultancy by <span className="font-semibold text-purple-600">Mr. A.V.L. Narasimham</span></h2>
                <div className="space-y-6">
                  {/* Family Background */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Family Background</h3>
                    <p className="text-opacity-90">
                      Mr. A.V.L. Narasimham is the second son of <span className="font-semibold">Late Sri A.S.N. Murty</span> and <span className="font-semibold">Smt. A. Bangaramma</span>. His father was an <span className="text-purple-600">eminent Advocate</span> based in Parlakhemundi (Ganjam district), Odisha. He is also the son-in-law of <span className="font-semibold">Late Shri N. Seetha Raman</span>, who served as the Electrical Head at FACOR. He has one elder brother who was a <span className="text-purple-600">renowned judge</span> in Odisha and four sisters. He is happily married to <span className="font-semibold">Mrs. Suryakanthi</span> and they have three children. His youngest daughter is settled in Vizag with her son-in-law working at Vizag Steel. His second daughter is in the US, where both she and her son-in-law work for Campbell Phillips, a reputed oil company. His eldest son works in a ferro alloy plant. He was born on <span className="font-semibold">24th September 1947</span> in Hargaon, a small industrial town in Sitapur District, Uttar Pradesh.
                    </p>
                  </div>
<br></br>
                  {/* Educational Background */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Educational Background</h3>
                    <ul className="list-disc list-inside space-y-2 text-opacity-90">
                      <li>Completed early education up to <span className="font-semibold">Pre-Professional Course</span> in Parlakhemundi</li>
                      <li>Graduated in <span className="text-purple-600">Metallurgical Engineering</span> from <span className="font-semibold">Regional Engineering College, Rourkela (Odisha)</span></li>
                      <li>Maintained <span className="text-purple-600">consistent first-class performance</span> throughout academic career</li>
                      <li>Member of <span className="font-semibold">MIIM (Member of Indian Institute of Metals)</span> and <span className="font-semibold">MIE (Member of Institution of Engineers)</span></li>
                      <li>Associated with the <span className="font-semibold">Indian Institute of Metals</span></li>
                      <li>Demonstrated strong aptitude in metallurgical sciences and engineering principles</li>
                      <li>Participated actively in technical workshops and industrial training programs</li>
                    </ul>
                  </div>
<br></br>
                  {/* Professional Background */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Professional Background</h3>
                    <p className="text-opacity-90 mb-4">
                      Mr. Narasimham began his professional journey in 1969 with Ferro Alloys Corporation (FACOR) as a Shift Metallurgist and rose to the position of General Manager by 1993. He held several senior leadership roles in Tata Steel, Balasore Alloys, Shah Alloys, Metkore Alloys, and Rohit Ferro Tech. In 2004, he founded his own consultancy firm and has since provided comprehensive technical advisory services and operational turnaround strategies to numerous ferro alloy plants across India. With over <span className="font-semibold text-purple-600">50+ years of experience</span> in the industry, he continues to be a trusted advisor to leading metallurgical companies.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-3">Detailed Ferro Alloy Plants Involvement</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                          <tr className="bg-purple-100 dark:bg-purple-900">
                            <th className="border border-gray-300 dark:border-gray-700 p-2">Period</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">Organization</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">Position</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">Remarks</th>
                          </tr>
                        </thead>
                        <tbody className="text-opacity-90">
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">1969-1982</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Ferro Alloys Corporation, Shreeram nagar A.P</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Asst Superintendant</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">1983-1990</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Charge chrome plant, Randia, Bhadrak, Orissa</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Senior Manager</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">1991-1998</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Ferro Alloys Corporation, Shreeram nagar A.P</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">General Manager(CEO)</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">1998-1999</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">FAP Bamnipal, TATA steel, Orissa</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">AGM(LEVEL3)</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">2000-2003</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Balasore Alloys LTD, Balgopalpur, Orissa</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Director(Operations)</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">2004-2006</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2 space-y-2">
                              <p>1. Srivasavi Industries, Bishnupur, West Bengal</p>
                              <p>2. JSPL Raigarh Chattisgarh</p>
                              <p>3. GMR Industries, Tekkali, A.P</p>
                              <p>4. Andhra Ferro Alloys, Garbham A.P</p>
                              <p>5. Sri Raghavendra Ferro Alloys, NakerkOl, A.P</p>
                              <p>6. Jindal stainless, JKRoad, Orissa</p>
                              <p>7. Rohit Ferro Tech, Bishnupur, W.B</p>
                              <p>8. Monnet Ispat, Durgapur, W.B</p>
                              <p>9. Shyam Ferro, W.B</p>
                              <p>10. Sova ISPAT W.B</p>
                              <p>11. Jindal steel, Kothavalasa, A.P</p>
                              <p>12. Monnet Ispat Raipur</p>
                            </td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Consultancy</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">2007</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">ROHIT Ferro Tech, JK Road, Orissa</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Technical Director</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Regular Service</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">2008</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">SAL STEEL Gandidham, Gujarat</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Executive Director</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">2009-2015</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2 space-y-2">
                              <p>1. Sri Vasavi Industries, Bishnupur W.B</p>
                              <p>2. Metkore Industries, Tekkali, A.P</p>
                              <p>3. JSPL RAIGARH</p>
                              <p>4. SAL STEEL Gandidham, Gujarat</p>
                              <p>5. Mahalakshmi smelters Garbham A.P</p>
                              <p>6. Swastik Ferro Alloys, Garividi A.P</p>
                              <p>7. Andhra Ferro Alloys, Garbham A.P</p>
                              <p>8. Prakash Industries champa Chattisgarh</p>
                            </td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Technical Adviser</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
<br></br>
                  {/* Image Slider */}
                  <div className="mb-8">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                      className="w-full h-64 md:h-80"
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="w-full h-full relative rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Professional Overseas Visits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Professional Overseas Visits</h3>
                    <p className="text-opacity-90 mb-4">
                      Mr. Narasimham has visited several international plants as part of his technical career:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-opacity-90">
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇩🇪</span> West Germany
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇯🇵</span> Japan
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇿🇦</span> South Africa
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇿🇼</span> Zimbabwe
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇸🇪</span> Sweden
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇳🇴</span> Norway
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇫🇮</span> Finland
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇨🇳</span> China
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇴🇲</span> Oman
                      </li>
                    </ul>
                  </div>
<br></br>
                  {/* Personal International Visits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Personal International Visits</h3>
                    <p className="text-opacity-90 mb-4">
                      Personal travels and leisure visits to various countries:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-opacity-90">
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇺🇸</span> United States
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇬🇧</span> United Kingdom
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇫🇷</span> France
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇮🇹</span> Italy
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇭🇰</span> Hong Kong
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇸🇬</span> Singapore
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🇮🇩</span> Indonesia
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl space-y-8">
                <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                <p className="text-opacity-90 mb-4">
                  <span className="font-bold text-purple-600">To deliver innovative, scalable, and cost-effective metallurgical solutions</span> that enhance production, efficiency, and sustainability across the ferro alloy sectors.
                </p>
                <p className="text-opacity-90">
                  We are committed to leveraging decades of hands-on experience to provide comprehensive technical consulting that optimizes plant operations, reduces production costs, and implements sustainable practices in the metallurgical industry.
                </p>
                <br></br>
                <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                <p className="text-opacity-90 mb-4">
                  <span className="font-bold text-purple-600">To be India's most trusted metallurgical think tank</span>, consistently delivering strategic, technical, and operational value to industry-leading clients.
                </p>
                <p className="text-opacity-90">
                  We aspire to shape the future of India's ferro alloy sectors by fostering innovation, sharing knowledge, and building lasting partnerships that drive industry excellence and sustainable growth.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl space-y-4">
                <h2 className="text-2xl font-semibold mb-3">Why Top Industries Trust Us</h2>
                <ul className="list-disc list-inside space-y-2 text-opacity-90">
                  <li><strong>50+ years</strong> of experience in metallurgical plant operations & turnaround consulting.</li>
                  <li><strong>Hands-on transformation</strong> of multiple ferro alloy units in Odisha, West Bengal, Andhra Pradesh, and Chhattisgarh.</li>
                  <li><strong>Recognized by TATA, Jindal, GMR, Ferro Alloys Corp.,</strong> and many others for real, impactful results.</li>
                </ul>
              </div>

              {/* Impact Timeline */}
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-6">Our Impact Journey</h2>
                <div className="border-l-4 border-purple-500 pl-6 space-y-6">

                  <div>
                    <p className="font-bold text-purple-600">1994 – Ferro Alloys Corporation Ltd</p>
                    <p className="text-opacity-80">
                      Developed breakthrough method to use <em>High Manganese Slag</em> when raw materials were scarce, enabling continued exports.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-purple-600">2004 – Jindal Steel & Power</p>
                    <p className="text-opacity-80">
                      Solved persistent sparking issues at contact shoes in SAF furnaces, ensuring long-term equipment reliability.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-purple-600">2005 – GMR Ferrochrome Plant</p>
                    <p className="text-opacity-80">
                      Achieved <em>consistent reduction in carbon %</em> in production over a 3-month optimization engagement.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-purple-600">2008 – SAL STEEL Gandidham</p>
                    <p className="text-opacity-80">
                      Led plant operations as Executive Director, implementing strategic improvements in production efficiency and quality control systems.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-purple-600">2009-2015 – Multiple Plants</p>
                    <p className="text-opacity-80">
                      Provided comprehensive technical advisory services to eight major ferro alloy plants across India, focusing on operational optimization, technological upgrades, and sustainable production practices.
                    </p>
                  </div>

                </div>
              </div>

              {/* CTA */}
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl text-center">
                <Link
                  href="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition"
                >
                  Request Consultation
                </Link>
              </div>

              {/* Acknowledgments */}
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-center text-purple-600">Acknowledgments</h2>
                <div className="text-center space-y-4">
                  <p className="text-opacity-90 text-lg">
                    Mr. A.V.L. Narasimham expresses his heartfelt gratitude to those who have been instrumental in his success:
                  </p>
                  <div className="space-y-3 text-opacity-80">
                    <p>
                      <span className="font-semibold text-purple-600">His beloved wife</span> - <span className="font-semibold">Mrs. Suryakanthi</span>, for her unwavering support throughout his career journey
                    </p>
                    <p>
                      <span className="font-semibold text-purple-600">His children and son-in-laws</span> - for their love, encouragement and understanding
                    </p>
                    <p className="font-semibold text-purple-600 mb-2">Three key people behind his success:</p>
                    <ul className="space-y-1">
                      <li><span className="font-semibold">Mr. G.R.K. Murthy</span></li>
                      <li><span className="font-semibold">Mr. B.A. Raju</span></li>
                      <li><span className="font-semibold">Mr. Punit Jaswani</span></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}