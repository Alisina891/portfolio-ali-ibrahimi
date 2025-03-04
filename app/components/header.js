'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [show, setShow] = useState(true)
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className="w-full flex flex-col items-center text-black px-4">
      {/* Top Header Section */}
      <div className="flex flex-col w-full justify-center items-center text-center lg:flex-row lg:mt-20 lg:gap-10">
        <div className="lg:mb-36 h-72 flex flex-col justify-center">
          <h1 className="text-[35px] pt-12 font-semibold font-sans lg:text-[42px] lg:tracking-tight">
            Hey, I&apos;m Ali Sina
          </h1>
          <h2 className="text-gray-500 text-[26px] mt-5 font-semibold font-sans lg:text-[32px] lg:mt-2">
            Programmer &amp; Web Developer
          </h2>
          <div className="flex w-full justify-center items-center gap-5 mt-10 mb-10">
            <a
             href='/Profile.pdf'
             download='/Profile.pdf'
             >
              <button className="rounded border py-2 pr-4 border-sky-500 text-sky-500 flex justify-center items-center gap-1 hover:bg-sky-500 hover:shadow-lg hover:text-white focus:border-sky-500 focus:border-2 transition-all duration-300">
              <Image
                src="/images/icon.png"
                width={20}
                height={20}
                alt="icon"
                className="mb-1 ml-1"
              />
              Download CV
            </button>
             </a>
            <button className="rounded border py-2 px-3 border-sky-500 text-sky-500 flex justify-center items-center hover:bg-sky-500 hover:shadow-lg hover:text-white focus:border-sky-500 focus:border-2 transition-all duration-300"
            onClick={scrollToPortfolio}
            >
              Portfolio
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center max-lg:w-full sm:px-5">
          <Image
            src="/images/1.jpg"
            alt="profile image"
            width={500}
            height={500}
            className="rounded-md max-sm:w-[500px] max-lg:w-[700px] lg:min-w-[530px] lg:w-full shadow-md transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* What I Do Best Section */}
      <div className="mt-20 w-full bg-[url('/images/back.webp')] md:bg-[400px_center] bg-[-30px_center] md:bg-no-repeat bg-cover">
        <div className="w-full flex flex-col justify-center items-start pl-5 md:pl-24 backdrop-blur-sm md:pt-28 pb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin font-sans">
            What I do best
          </h1>
          <div className="flex justify-start w-full max-w-[500px] mt-5 gap-5">
            <div className="mt-2">
              <Image
                alt="creative pages"
                src="/images/page.jpeg"
                width={80}
                height={80}
                className='min-w-[50px]'
              />
            </div>
            <div className="flex flex-col">
              <h3 className="pb-2 font-semibold font-sans text-[21px]">Creative pages</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos, veniam voluptas impedit velit aliquid doloribus pariatur error animi sed.
              </p>
            </div>
          </div>

          <div className="flex justify-start w-full max-w-[500px] mt-5 gap-5">
            <div className="mt-2">
              <Image
                alt="fast loading"
                src="/images/a.png"
                width={80}
                height={80}
                 className='min-w-[50px]'
              />
            </div>
            <div className="flex flex-col">
              <h3 className="pb-2 font-semibold font-sans text-[21px]">Dynamic and fast loading pages</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel maiores vero quaerat, error atque!
              </p>
            </div>
          </div>

          <div className="flex justify-start w-full max-w-[500px] mt-5 gap-5">
            <div className="mt-2">
              <Image
                alt="secure system"
                src="/images/secure.png"
                width={80}
                height={80}
                className='min-w-[50px]'
              />
            </div>
            <div className="flex flex-col">
              <h3 className="pb-2 font-semibold font-sans text-[21px]">Secure and sage system</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit harum ducimus doloribus animi?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="w-full flex flex-col justify-center items-center mt-28">
        <h2 id='portfolio' className="text-[29px] font-sans font-semibold">My Portfolio</h2>
        <p className="mt-5 text-gray-600">Most recent projects I have complete</p>
        <div className="flex w-full justify-between px-10 max-w-[500px] mt-5">
          <button
            className="text-blue-500 transition-all duration-300"
            onClick={() => setShow(true)}
          >
            All
          </button>
          <button
            className="text-blue-500 transition-all duration-300"
            onClick={() => setShow(false)}
          >
            Web pages
          </button>
          <button>Desktop app</button>
          <button>Mobile app</button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 items-center w-full">
          {/* Card 1 */}
          <div className="mt-10 w-80 border-sky-500 border shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center justify-center text-center rounded-xl bg-white">
            <div className="group w-full flex flex-col items-center justify-center">
              <div className="h-48 overflow-hidden">
                <Image
                  alt="sleeman"
                  src="/images/sleeman.png"
                  width={150}
                  height={150}
                  className="mt-10 transition-all duration-500 transform group-hover:rotate-[360deg] group-hover:scale-110 group-hover:w-[200px]"
                />
              </div>
              <h4 className="text-xl font-sans font-semibold mt-10">Sleeman</h4>
              <p className="mt-3 max-w-[220px] text-gray-600">
                A funny web application which I done for a canadian client and shared here by his permission.
              </p>
            </div>
            <a href="https://sleeman-ali-ibrahimi.vercel.app/">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border border-sky-500 rounded-full group my-5 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition-all duration-500">
                <span className="absolute inset-0 bg-sky-500 transition-transform duration-500 ease-out transform scale-0 group-hover:scale-100"></span>
                <span className="relative group-hover:text-white">Go to page</span>
              </button>
            </a>
          </div>

          {show && (
            <div className="mt-10 w-80 border-sky-500 border shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center justify-center text-center rounded-xl bg-white">
              <div className="group w-full flex flex-col items-center justify-center">
                <div className="h-60 overflow-hidden">
                  <Image
                    alt="youtube"
                    src="/images/youtube.jpg"
                    width={150}
                    height={150}
                    className="mt-10 transition-all duration-500 transform group-hover:rotate-[360deg] group-hover:scale-110 group-hover:w-[200px]"
                  />
                </div>
                <h4 className="text-xl font-sans font-semibold mt-10">Youtube clone</h4>
                <p className="mt-3 max-w-[220px] text-gray-600">
                  A basic model of popular and most visited website
                </p>
              </div>
              <a href="https://web-youtube-project.vercel.app/">
                <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border border-sky-500 rounded-full group my-5 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition-all duration-500">
                  <span className="absolute inset-0 bg-sky-500 transition-transform duration-500 ease-out transform scale-0 group-hover:scale-100"></span>
                  <span className="relative group-hover:text-white">Go to page</span>
                </button>
              </a>
            </div>
          )}

          {/* Card 3 */}
          <div className="mt-10 w-80 border-sky-500 border shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center justify-center text-center rounded-xl bg-white">
            <div className="group w-full flex flex-col items-center justify-center">
              <div className="h-60 overflow-hidden">
                <Image
                  alt="book"
                  src="/images/book.png"
                  width={150}
                  height={150}
                  className="mt-10 transition-all duration-500 transform group-hover:rotate-[360deg] group-hover:scale-110 group-hover:w-[200px]"
                />
              </div>
              <h4 className="text-xl font-sans font-semibold mt-10">Book store</h4>
              <p className="mt-3 max-w-[220px] text-gray-600">
                This is an instance of online book store.
              </p>
            </div>
            <a href="https://book-store-nine-delta.vercel.app/">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white border border-sky-500 rounded-full group my-5 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition-all duration-500">
                <span className="absolute inset-0 bg-sky-500 transition-transform duration-500 ease-out transform scale-0 group-hover:scale-100"></span>
                <span className="relative group-hover:text-white">Go to page</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Follow Me Section */}
      <div className="flex w-full bg-[url('/images/back.webp')] rounded-full mt-28 bg-center mb-5 bg-cover">
        <div className="w-full flex flex-col backdrop-blur-[9px] justify-center items-center text-center py-10">
          <h2 className="text-3xl font-bold text-black">Follow me</h2>
          <div className="flex gap-3 mt-5">
            <a href="https://github.com/Alisina891">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/github.gif"
                  alt="github"
                  width={50}
                  height={50}
                  className="rounded-full cursor-pointer"
                />
                <p className="font-bold">Github</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ali-sina-ibrahimi-b510a232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/link.svg"
                  alt="linkedin"
                  width={50}
                  height={50}
                  className="rounded-full cursor-pointer"
                />
                <p className="font-bold">Linkedin</p>
              </div>
            </a>
          </div>
          <p className="text-gray-500 mt-10">© All right reserved. made by Ali Ibrahimi</p>
        </div>
      </div>
    </div>
  )
}
