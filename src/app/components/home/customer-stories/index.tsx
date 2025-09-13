import Image from 'next/image'

function CustomerStories() {
  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center gap-10 md:gap-20'>
            <div className='mx-auto max-w-4xl flex items-center text-center'>
              <h2 className='whitespace-nowrap'>
                Proven Impact. Trusted by Industry Leaders.
                <span className='instrument-font italic font-normal dark:text-white/70 whitespace-normal block'>
                  
                  Real stories from real metallurgical transformations.
                </span>
              </h2>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className='text-white/60 uppercase text-sm font-medium'>
                    Customer stories
                  </span>
                  <div className='flex flex-col gap-6 '>
                    <h4 className='text-white'>
                      " AVL Narasimham leadership helped stabilize our Ferro Alloys plant, resulting in a significant boost in both productivity and profitability.His ability to motivate teams and execute improvements was commendable."
                    </h4>
                    <div className='flex flex-col gap-1'>
                      <p className='text-white font-medium'>Chairman, SAL Steel Ltd.</p>
                      <p className='text-white/60 text-sm font-medium'>
                        Ahmedabad, Gujarat
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8'>
                  <div>
                    <span className='uppercase text-sm font-medium text-dark_black/60'>
                      Facts & numbers
                    </span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-7xl font-medium dark:text-dark_black'>
                      91%
                    </h2>
                    <h4 className='dark:text-dark_black'>
                      Clients recommend our design services."
                    </h4>
                  </div>
                </div>
              </div>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      Customer stories
                    </span>
                    <h4 className='text-white'>
                      We truly value AVL Narasimham's contribution as Director (Technical). His efforts were pivotal to our unit's growth and operational progress</h4> <p className='text-white'> - Rohit Ferro-Tech Ltd., Odisha
                    </p>
                    <div>
                      <Image
                        src='/images/home/customerStories/creativity_img.jpg'
                        alt='image'
                        width={344}
                        height={220}
                        className='w-full h-52'
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium'>
                      Customer stories
                    </span>
                    <h2 className='text-2xl lg:text-5xl'>
                      "During his consultation at our Bishnupur plant, Mr. AVL Narasimham brought transformational changes in production, quality, and overall plant efficiency. His insights elevated our techno-economic performance to new heights."
                    </h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-medium'>G. Eswara Rao, Chairman</p>
                    <p className='text-dark_black/60 dark:text-white/60 text-sm font-medium'>
                      Sri Vasavi Industries Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                
<div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      MNC stories
                    </span>
                    <h4 className='text-white'>
                      Mr. AVL Narasimham brought significant improvements to operations. His deep technical expertise is unmatched in this domain.</h4> <p className='text-white'> - Firdose Vandrevala, Director
Tata Steel             </p>
                    <div>
                      <Image
                        src='/images/home/customerStories/creativity_img.jpg'
                        alt='image'
                        width={344}
                        height={220}
                        className='w-full h-52'
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className='text-white/60 uppercase text-sm font-medium'>
                    Customer stories
                  </span>
                  <div className='flex flex-col gap-6 '>
                    <h4 className='text-white'>
                      " AVL Narasimham's innovation in utilizing high manganese slag helped us meet critical export targets despite raw material shortages. A true example of problem-solving under constraints."
                    </h4>
                    <div className='flex flex-col gap-1'>
                      <p className='text-white font-medium'>Ashish Saraf, President</p>
                      <p className='text-white/60 text-sm font-medium'>
                        Ferro Alloys Corporation Ltd. (FACOR)
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                
                <div className='flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium'>
                      Customer stories
                    </span>
                    <h2 className='text-2xl lg:text-5xl'>
                      "Mr. Narasimham quickly diagnosed and resolved persistent sparking issues in our furnace systems and also provided valuable long-term plant optimization strategies."
                    </h2>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-medium'>G. Eswara Rao, Chairman</p>
                    <p className='text-dark_black/60 dark:text-white/60 text-sm font-medium'>
                      GMR Industries Ltd., Srikakulam
                    </p>
                  </div>
                </div>
                <div className='flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8'>
                  <div className='flex flex-col gap-6'>
                    <span className='text-white/60 uppercase text-sm font-medium'>
                      Customer stories
                    </span>
                    <h4 className='text-white'>
                      Mr. Narasimham quickly diagnosed and resolved persistent sparking issues in our furnace systems and also provided valuable long-term plant optimization strategies.</h4> <p className='text-white'> - Jindal Steel & Power Ltd.</p>
                    <div>
                      <Image
                        src='/images/home/customerStories/creativity_img.jpg'
                        alt='image'
                        width={344}
                        height={220}
                        className='w-full h-52'
                        unoptimized={true}
                      />
                    </div>
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

export default CustomerStories