const data = {
  basic_info: {
    description_header: "Hi",
    description:
      "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
    section_name: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
  },
  projects: [
    {
      title: "Animal Shelter",
      startDate: "2020",
      description:
        "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      images: [
        "images/portfolio/animal-shelter/p1.jpg",
        "images/portfolio/animal-shelter/p2.jpg",
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
    {
      title: "Photography",
      startDate: "2018",
      description:
        "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      images: [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-react-original",
          name: "React",
        },
        {
          class: "devicon-javascript-plain",
          name: "JavaScript",
        },
      ],
    },
    {
      title: "3D Object Viewer",
      startDate: "2015",
      description:
        "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      images: [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
  ],
  experience: [
    {
      company: "Ribbon Communications, Kanata",
      title: "Web Developer Intern",
      years: "Sep 2022 - April 2023",
      mainTech: ["Angular 11/14"],
      technologies: [
        "PrimeNG",
        "Angular",
        "JavaScript",
        "UI testing"
      ],
      icon: "fab fa-angular"
    },
    {
      company: "Algonquin College, Ottawa",
      title: "Web Development & Internet Applications",
      years: "Sep 2021 - Sep 2023",
      mainTech: ["Masters"],
      technologies: ["PHP", "JavaScript", "ASP.NET", "Python", "Databases"],
      icon: "fa fa-graduation-cap"
    },
    {
      company: "West Agile Labs, Hyderabad",
      title: "Web Developer",
      years: "Feb 2019 - Aug 2021",
      mainTech: ["ReactJS"],
      technologies: ["HTML/CSS", "JavaScript", "React", "React Native"],
      icon: "fab fa-react"
    },
    {
      company: "Mobile Ways, Hyderabad",
      title: "Web Developer",
      years: "October 2018 - Jan 2019",
      mainTech: ["HTML ReactJS"],
      technologies: ["HTML/CSS", "JavaScript", "React"],
      icon: "fa fa-code"
    },
    {
      company: "ADP India, Hyderabad",
      title: "Web Developer",
      years: "June 2016 - Aug 2018",
      mainTech: ["ReactJS Lifion"],
      technologies: ["HTML/CSS", "JavaScript", "React", "Lifion Platform"],
      icon: "fa fa-code"
    }
  ],
};

export default data;