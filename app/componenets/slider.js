
'use client'
import React, { useEffect, useRef, useState } from 'react';


  
export default function Slider() {
  

  const slidesContainerRef =useRef(null);
  const slideRef =useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
    setSlideWidth(slideRef.current.clientWidth);
  }, []);

  const handleNextClick = () => {
    if (currentSlide < slidesContainerRef.current.children.length - 1) {
      setCurrentSlide(currentSlide + 1);
      slidesContainerRef.current.scrollLeft += slideWidth;
    }
  };

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      slidesContainerRef.current.scrollLeft -= slideWidth;
    }
  };

  
  return (
 
    <> 
 <div id="app" className="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
      <h1 className="font-cabinetGrotesk text-3xl lg:text-4xl font-bold mb-12 leading-tight">Tailwind CSS Carousel</h1>
      <div className="relative">
        <div ref={slidesContainerRef} className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className={`slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden ${index === currentSlide ? 'opacity-100' : 'opacity-70'}`}>
              <img
                ref={slideRef}
                className="w-full h-full object-cover"
                src={`https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600`}
                alt="mountain_image"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button role="button" onClick={handlePrevClick} className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
          <button role="button" onClick={handleNextClick} className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
     <div
    id="testimonials"
    className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
    <div className="max-w-6xl mx-auto">
      <div className="flex-col items-center ">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
          <p className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
            Our customers love our product
          </p>
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            Testimonials
          </h2>
          <p className="my-6 text-xl font-medium text-gray-500">
            Don't just take our word for it, read from our extensive list of case
            studies and customer testimonials.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
          <div className="w-full xl:w-1/2 xl:pr-8">
            <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
              <div className="flex flex-col pr-8">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                  </svg>
                  <p className="mt-2 text-base text-gray-600">
                    I'm loving these templates! Very nice features and layouts.
                  </p>
                </div>
                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                  Sandra Walton{" "}
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
              </div>
              <img
                className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                alt=""
              />
            </blockquote>
            <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                  </svg>
                  <p className="mt-2 text-base text-gray-600">
                    Really digging this service. Now I can quickly bootstrap any
                    project.
                  </p>
                </div>
                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                  Kenny Jones{" "}
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
              </div>
              <img
                className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                alt=""
              />
            </blockquote>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-8">
            <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                  </svg>
                  <p className="mt-2 text-base text-gray-600">
                    Extremely helpful in every single project we have released.
                  </p>
                </div>
                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                  Mike Smith
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
              </div>
              <img
                className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                alt=""
              />
            </blockquote>
            <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <svg
                    className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                  </svg>
                  <p className="mt-2 text-base text-gray-600">
                    Finally a quick and easy system I can use for any type of
                    project.
                  </p>
                </div>
                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                  Molly Sanchez{" "}
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
              </div>
              <img
                className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                alt=""
              />
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <div class="max-w-screen-xl py-10 mx-auto px-5 bg-white min-h-sceen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 tracking-tight">
			FAQ
		</h2>
		<p class="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is a SAAS platform?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 SAAS platform is a cloud-based software service that allows users to access
					and use a variety of tools and functionality.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How does  billing work?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a variety of billing options, including monthly and annual subscription plans,
					as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
					card or other secure online payment method.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I get a refund for my subscription?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
					satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
					for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
					basis.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I cancel my subscription?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					To cancel your We subscription, you can log in to your account and navigate to the
					subscription management page. From there, you should be able to cancel your subscription and stop
					future billing.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I try this platform for free?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a free trial of its  platform for a limited time. During the trial period,
					you will have access to a limited set of features and functionality, but you will not be charged.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I access   documentation?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					  Documentation is available on the company's website and can be accessed by
					logging in to your account. The documentation provides detailed information on how to use the ,
					as well as code examples and other resources.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I contact support?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					If you need help with the platform or have any other questions, you can contact the
					company's support team by submitting a support request through the website or by emailing
					support@We.com.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Do you offer any discounts or promotions?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We may offer discounts or promotions from time to time. To stay up-to-date on the latest
					deals and special offers, you can sign up for the company's newsletter or follow it on social media.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do we compare to other similar services?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 This platform is a highly reliable and feature-rich service that offers a wide range
					of tools and functionality. It is competitively priced and offers a variety of billing options to
					suit different needs and budgets.
				</p>
			</details>
		</div>
	</div>
</div>

  
  </>
  
  

  );
}





