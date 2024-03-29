import ME from './assets/me.png'
import MeAbout from "./assets/me-about.jpg";
import { IoLanguageSharp } from 'react-icons/io5'
import { BsPatchCheckFill, BsWhatsapp } from 'react-icons/bs'
import { FaAward, FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { HiPencil } from 'react-icons/hi';
import { MdCodeOff, MdOutlineEmail } from 'react-icons/md'
import { FiTwitter } from 'react-icons/fi'

import IMG1 from './assets/portfolio1.jpg'
import IMG2 from './assets/portfolio2.jpg'
import IMG3 from './assets/portfolio3.jpg'
import IMG4 from './assets/portfolio4.jpg'
import IMG5 from './assets/portfolio5.png'
import IMG6 from './assets/portfolio6.jpg'

import AVT1 from './assets/avatar1.jpg'
import AVT2 from './assets/avatar2.jpg'
import AVT3 from './assets/avatar3.jpg'
import AVT4 from './assets/avatar4.jpg'


export const data = {
    imag: ME,
    imag2: MeAbout,
}

export const cardData = [
    { icon: <IoLanguageSharp />, title: "Langauge Skill", year: "Over 4 + Years" },
    { icon: <FaAward />, title: "React Development", year: "2 + Years" },
    { icon: <GiTeacher />, title: "Teaching Skill", year: "4 + Years" },
  ];

export const expFrontEndData = [
    {
        icon: <BsPatchCheckFill />, 
        progLang: "HTML", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "CSS", 
        experience: "Experienced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Bootstrap", 
        experience: "Advanced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Tailwind", 
        experience: "Advanced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "JS", 
        experience: "Advanced",
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "ReactJS", 
        experience: "Advanced",
    },

]

export const expBackEndData = [
    {
        icon: <BsPatchCheckFill />, 
        progLang: "Python", 
        experience: "Basics" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "MYSQL", 
        experience: " Intermediate " 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "NodeJs", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "MongoDB", 
        experience: "Experienced" 
    },
    {
        icon: <BsPatchCheckFill />, 
        progLang: "PHP", 
        experience: "Basics" 
    },
]

export const servicesListWrite = [
    {
        icon: <HiPencil />, 
        text: "Grammar Check " 
    },
    {
        icon: <HiPencil />, 
        text: "Accuracy with expression " 
    },
    {
        icon: <HiPencil />, 
        text: "Lorem, ipsum dolor sitr " 
    },
    {
        icon: <HiPencil />, 
        text: "Lorem, ipsum dolor sit  " 
    },
   
]
export const servicesListWeb = [
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit " 
    },
    {
        icon: <MdCodeOff />, 
        text: "Lorem, ipsum dolor sit  " 
    },
    
]
export const servicesListTeach = [
    {
        icon: <FaChalkboardTeacher />, 
        text: "German Language Teaching" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "French Language Teaching" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "English Language Teaching" 
    },
    {
        icon: <FaChalkboardTeacher />, 
        text: "Yoruba Basic Language Teaching" 
    },
    
    
]
export const portfolioData = [

    {
        img: IMG1,
        text: "Lorem, ipsum dolor sit "
    },


    {
        img: IMG2,
        text: "Lorem, ipsum dolor sit "
    },

    
    {
        img: IMG3,
        text: "Lorem, ipsum dolor sit "
    },

    
    {
        img: IMG4,
        text: "Lorem, ipsum dolor sit "
    },
    
    {
        img: IMG5,
        text: "Lorem, ipsum dolor sit "
    },
    {
        img: IMG6,
        text: "Lorem, ipsum dolor sit "
    },

]

export const testimonialData = [

    {
        id: 1,
        avatar: AVT1,
        name: 'SIB Tunechy',
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae molestias temporibus quos ducimus itaque voluptatum voluptas quo  necessitatibus nihil ab nulla ipsa doloribus commodi earum, corporis impedit illum velit."
    },

    {
        id: 2,
        avatar: AVT2,
        name: 'Opeyemi Salaudeen',
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae molestias temporibus quos ducimus itaque voluptatum voluptas quo  necessitatibus nihil ab nulla ipsa doloribus commodi earum, corporis impedit illum velit."
    },

    {
        id: 3,
        avatar: AVT3,
        name: 'Sharta Moremi',
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae molestias temporibus quos ducimus itaque voluptatum voluptas quo  necessitatibus nihil ab nulla ipsa doloribus commodi earum, corporis impedit illum velit."
    },

    {
        id: 4,
        avatar: AVT4,
        name: 'Moremi James',
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae molestias temporibus quos ducimus itaque voluptatum voluptas quo  necessitatibus nihil ab nulla ipsa doloribus commodi earum, corporis impedit illum velit."
    },
]


export const contactData = [
    {
        id: 1,
        icon:  <MdOutlineEmail />,
        contctType: 'Email',
        emailadrss: 'adams@gmail.com',
        link: " mailto:adams.albarka@gmail.com"
    },
    {
        id: 2,
        icon:  <FiTwitter />,
        contctType: 'Twitter',
        emailadrss: '@Adams_albarka',
        link: " https://twitter.com/adams_albarka "
    },
    {
        id: 3,
        icon:  <BsWhatsapp />,
        contctType: 'WhatsApp',
        emailadrss: "+2349036867997",
        link: " https://api.whatsapp.com/send?phone=+2349036867997 "
    },
]

