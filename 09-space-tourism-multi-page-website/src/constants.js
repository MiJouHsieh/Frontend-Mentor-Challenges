import moon from "src/assets/destination/image-moon.webp";
import mars from "src/assets/destination/image-mars.webp";
import europa from "src/assets/destination/image-europa.webp";
import titan from "src/assets/destination/image-titan.webp";

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