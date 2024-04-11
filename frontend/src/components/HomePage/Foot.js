import React from 'react'
import { Footer } from "flowbite-react";
import { BsTiktok, BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";


export default function Foot() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-10 dark:text-white px-6 py-10 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className='text-white' />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#" className='text-white'>About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className='text-white'/>
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className='text-white' />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#" >Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-white' title="download" />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#" >iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Copyright: SENA ASDO ™" year={2024} className='text-white' />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
            <Footer.Icon  className='text-white' href="https://es-la.facebook.com/" target="_blank" icon={BsFacebook} />
            <Footer.Icon  href="https://www.instagram.com/"className='text-white'  target="_blank" icon={BsInstagram} />
            <Footer.Icon   href="https://www.youtube.com/?reload=9"   target="_blank" className='text-white' icon={BsYoutube} />
            <Footer.Icon href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" className='text-white'   target="_blank" icon={BsTiktok} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

  //   <div className="bg-black text-white text-center w-100 h-12 mt-4 py-4 " >
  //   © 2024 Copyright: SENA ASDO
  // </div>
