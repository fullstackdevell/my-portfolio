import projectOneImage from '../assets/thecompiler.png';
import projectTwoImage from '../assets/linktree.png';
import reactquizapp from '../assets/reactquizapp.png';
import qrCodeGenerator from '../assets/qrcodegenerator.png';
import fretboard from '../assets/fretboard.png';
import colorthebird from '../assets/colorthebird.png';
import flexboxfroggy from '../assets/flexboxfroggy.png';
import thesis from '../assets/thesis.png';

const projects = [
  //   {
  //   id: 1,
  //   title: "The Compiler",
  //   description: "A game that lets you practice your code reading skills.",
  //   image: projectOneImage,
  //   tags: ["CSS", "JavaScript", "React", "MongoDB"],
  // },
  {
    id: 2,
    title: "GDG Linktree",
    description: "A linktree for a Google Developer Group On Campus.",
    image: projectTwoImage,
    tags: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "React Quiz App",
    description: "Interactive multi-topic quiz built with React to test core web development knowledge (HTML, CSS, JavaScript)",
    image: reactquizapp,
    tags: ["CSS", "JavaScript", "React"],
  },
  {
    id: 4,
    title: "QR Code Generator",
    description: "Generates custom QR codes from text or a URL. Users can adjust the size, foreground, and background colors, and download the generated qr code image.",
    image: qrCodeGenerator,
    tags: ["HTML", "CSS", "JavaScript", "QRCode.js"],
},
{
    id: 5,
    title: "Interactive Guitar Fretboard",
    description: "An educational web tool that visualizes notes on a customizable fretboard (guitar, bass, ukulele). Features include instrument selection, accidental toggles (sharps/flats), and note highlighting on hover.",
    image: fretboard,
    tags: ["HTML", "CSS", "JavaScript"],
},
{
    id: 6,
    title: "Color a Bird game",
    description: "A creative web application allowing users to change the color of different parts of a CSS-drawn parrot (body, wings, beak, etc.) using interactive control buttons.",
    image: colorthebird,
    tags: ["HTML", "CSS", "JavaScript"],
},
{
    id: 7,
    title: "Flexbox Froggy Game Clone",
    description: "An interactive learning tool, inspired by Flexbox Froggy, where users solve CSS layout puzzles by writing Flexbox properties in a live editor to position colored frogs onto matching lily pads.",
    image: flexboxfroggy,
    tags: ["HTML", "CSS", "JavaScript"],
},
{
    id: 8,
    title: "HouseSupervisor Mobile App",
    description: "SwiftUI mobile app that controls a Raspberry Pi-based smart home system with pet face recognition, secured by a Firebase cloud architecture",
    image: thesis,
    tags: ["SwiftUI", "Python", "Raspberry Pi", "Firebase", "UI/UX Design", "IoT"]
}
]

export default projects;