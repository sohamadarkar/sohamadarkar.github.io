import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  private api = 'https://mailthis.to/so.adarkar24@gmail.com';

  constructor(
    private http: HttpClient
  ) { }

  PostMessage(input) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
        (response) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
    )
  }

  projects:any = [
    {
      id: 1,
      title: 'LOCAL TRAIN E-TICKETING',
      desc: '',
      livedemo: 'https://ijsrcseit.com/CSEIT1722177',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: 'https://ijsrcseit.com/CSEIT1722177',
      imgUrl: 'assets/images/z1.png',
      tech: 'MySQL, Android, Google Location API'
    },

    {
      id: 2,
      title: 'Template-driven component',
      desc: '',
      livedemo: 'https://www.jibe.com.sg/',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: 'https://www.jibe.com.sg/',
      imgUrl: 'assets/images/z26.png',
      tech: 'Angular 8, NodeJS API'
    },

    {
      id: 3,
      title: 'Google Cloud API handling',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: 'https://www.cloudskillsboost.google/public_profiles/22ad6e34-debd-4a25-a4a2-f8c65fba5f3e',
      imgUrl: 'assets/images/z27.png',
      tech: 'NodeJS API, Angular forms'
    }
  ]

  certificates:any = [
    {
      id: 1,
      title: 'Certified Angular Developer',
      desc: '',
      livedemo: 'https://ijsrcseit.com/CSEIT1722177',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: 'http://certification-checker.herokuapp.com/certificate/2J26CGV',
      imgUrl: 'assets/images/portfolio1.PNG',
      tech: ''
    },

    {
      id: 2,
      title: 'Google Cloud API handling',
      desc: '',
      livedemo: 'https://www.jibe.com.sg/',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: 'https://www.jibe.com.sg/',
      imgUrl: 'assets/images/portfolio2.PNG',
      tech: 'Angular 8, NodeJS API'
    },

    {
      id: 3,
      title: 'Google Cloud API handling',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: 'https://www.cloudskillsboost.google/public_profiles/22ad6e34-debd-4a25-a4a2-f8c65fba5f3e',
      imgUrl: 'assets/images/portfolio3.png',
      tech: 'NodeJS API, Angular forms'
    },

    {
      id: 4,
      title: 'Google Cloud API handling',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: '',
      imgUrl: 'assets/images/portfolio4.PNG',
      tech: 'NodeJS API, Angular forms'
    },

    {
      id: 5,
      title: 'Google Cloud API handling',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: '',
      imgUrl: 'assets/images/portfolio5.PNG',
      tech: 'NodeJS API, Angular forms'
    },

    {
      id: 6,
      title: 'Google Cloud API handling',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/sohamadarkar',
      mediumlink: '',
      imgUrl: 'assets/images/portfolio6.PNG',
      tech: 'NodeJS API, Angular forms'
    }
  ]

  about2 = `Goal-oriented Software Developer with a strong commitment to collaboration and solutions-oriented problem-solving . 
  Lover of innovation and everything related to generate new knowledge .
  Faces problems with a smile and solve them as soon as possible . 
  Very calculative about the time spent on work .
  Uses various web design software to develop customer-focused websites and designs .
  Skilled in creating a responsive website, animation using Bootstrap, JavaScript, HTML, CSS, Angular 9+`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1YTLv96alWQYfPG7JjhDivYH0yOZpW-AV/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 8+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Typescript',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'HTML, CSS, JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL, MYSQL Server, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Devops, Azure',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'Github, docker',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'Zendesk, Azure',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Timeless Medical Systems',
      location: 'Toronto (Remote)',
      timeline: 'Jan 2022 to Present',
      role: 'Support Engineer',
      work: `Built front-end pages using Typescript and Angular 9 framework and tested the pages for SEO friendly metrics .
      Updated the User Interface using HTML, CSS, and JavaScript as per the requirements given by the design team .
      Used Devops and Github as a version control platforms to deploy the code .
      Collaborated with other developers and designers to maintain the same design overall under minimal supervision .
      Built custom Angular components and services to automate the functionalities and maximize the overall performance`

    },
    {
      id: 3,
      company: 'Google Developer Group',
      location: 'Toronto',
      timeline: 'Jan 2020 to Dec 2021',
      role: 'Google Developer Volunteer',
      work: `Collaborating with college alumni & students to help them create basic web applications using HTML, CSS, JavaScript .
      Built front-end pages using TypeScript and Angular 9 framework and tested the pages for SEO friendly metrics .
      Created stored procedures using Microsoft SQL Server and MySQL .
      Deployed application on web servers using Docker containers .
      Maintaining the same design in the overall application and making responsive web pages to support multiple devices`
    },

    {
      id: 2,
      company: 'Jibe Development Services',
      location: 'Mumbai',
      timeline: 'Aug 2018 to Dec 2019',
      role: 'Software  Developer',
      work: `Tested websites using Selenium and performed troubleshooting prior to deployment .
      Designed, implemented, and monitored web pages and sites for continuous improvement .
      Analyzed requirements and designed, developed, and implemented software applications for multiple websites .
      Revised, modularized, and updated old code bases to modern development standards .
      Collaborated with other developers to identify and alleviate the number of bugs and errors in the software `
    },

    {
      id: 1,
      company: 'Applab Technologies',
      location: 'Mumbai',
      timeline: 'June 2017 - Dec 2017',
      role: 'Software Developer Intern',
      work: `Followed Agile methodology using Scrum framework to plan, code and deploy the web application under scrum master .
      Created landing pages using Typescript and Angular Framework and used NodeJS API to Fetch data and display on landing pages .
      Updated the User Interface using HTML, CSS, and JavaScript as per requirements given by the design team .
      Created NodeJS APIs and stored procedures to fetch data from MySQL database to display information on landing pages .
      Store, retrieve, and manipulate data for analysis of system`
    },


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }

  getCertificates(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.certificates;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
