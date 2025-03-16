import moon from "src/assets/destination/image-moon.webp";
import mars from "src/assets/destination/image-mars.webp";
import europa from "src/assets/destination/image-europa.webp";
import titan from "src/assets/destination/image-titan.webp";

import commander from "src/assets/crew/image-douglas-hurley.webp"
import engineer from "src/assets/crew/image-anousheh-ansari.webp"
import pilot from "src/assets/crew/image-victor-glover.webp"
import specialist from "src/assets/crew/image-mark-shuttleworth.webp"



export const DESTINATION_LIST = {
  moon : {
    image: moon,
    planet: "Moon",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384,400 km",
    travelTime: "3 days"
  },
  mars: {
    image: mars,
    planet: "Mars",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!`,
    distance: "225 mil. km",
    travelTime: "9 months"
  },
  europa : {
    image: europa,
    planet: "Europa",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
    distance: "628 mil. km",
    travelTime: "3 years"
  },
  titan: {
    image: titan,
    planet: "Titan",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    travelTime: "7 years"
  }
}

export const CREW_LIST = {
  "commander": {
    position:"commander",
    title: "Commander",
    name: "Douglas Hurley",
    introduction: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
    image:commander
  },
  "specialist": {
    position:"specialist",
    title: "Mission Specialist",
    name:"Mark Shuttleworth",
    introduction: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    image:specialist  
  },
  "pilot": {
    position:"pilot",
    title: "Pilot",
    name:"Victor Glover",
    introduction: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
    image:pilot
  },
  "engineer": {
    position:"engineer",
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    introduction: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`,
    image: engineer
  }
}