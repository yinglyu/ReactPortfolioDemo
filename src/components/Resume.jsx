import React from "react";

import { NavBar } from './NavBar';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle } from './ResumeStyledComponents';

const resumeObject = {
    education: [
        { header: 'Texas A&M University', subHeader: 'Master of Computer Science', dates: '08/2019 - 12/2020', place:'College Station, Texas', descriptions: ['GPA: 4.0/4.0', 'Department of Computer Science and Engineering Scholarship Spring & Fall 2020'] },
        { header: 'Beijing University of Posts and Telecommunications', subHeader: 'Bachelor of Computer Science, focus on Computer Network', dates: '09/2015 - 07/2019', place:'Beijing, China', descriptions: ['GPA: 85.98/100 (Rank top 18/154)', 'BUPT Level-I Scholarship 2016-2017 (Rank top 5%)'] },
    ],
    work: [
        { header: 'Bloomberg L.P.', subHeader: 'Intern', dates: '06/2020 - 08/2020', place:'Princeton, NJ',descriptions: ['Deployed Kubernetes cluster to run a microservice pipeline',
       'Wrote a Golang client for a proprietary password vault service',
       'Built a Terraform (Infrastructure as Code) provider plugin for password management Developed a Continuous Integration/Continuous Deployment pipeline in Jenkins with automated test and release',
       'Significantly simplified deployment workflow that requires credentials'] },
        { header: 'Incoo Tech Co., Ltd', subHeader: 'Intern', dates: '06/2019 - 08/2019', place:'Beijing, China', descriptions: ['Utilized Distributed Credit Chain to trace advertisements',
        'Built smart contracts on Remix for Ethereum blockchain',
        'Archived account and transaction data using Golang and MySQL'] },
        { header: 'High Level Edu. Tech. Co., Ltd', subHeader: 'Intern', dates: '10/2018 - 06/2019', place:'Beijing, China', descriptions: ['Developed computer aided instruction software for introducing AI and Python to high school students',
        'Built a Python web crawler using Selenium module with MySQL database',
        'Designed Python drawing and game examples',
        'Maintained company website'] },
        { header: 'Center of Computer Architecture, BUPT', subHeader: 'Research Assistant', dates: '09/2017 - 06/2019', place:'Beijing, China', descriptions: ['Utilized the Ant Colony Optimization (ACO) to tackle TSP problem, probe space storage characteristics in different algorithms to put forward the possibility of sparse memory',
        'Defined the ACS sparse rate, optimized it through sparse matrix COO and promote its application',
        'Published 1 patent. CN108596326A: A Sparse Ant System and Solution Method for Large Scale'] },
    ],
    project: [
        { header: 'Software Engineering (Ruby on Rails)', subHeader: 'Administrative interface of on-campus commute solution for handicap students', dates: '09/2019 - 12/2019', place:'College Station, TX',descriptions: ['Utilized JavaScript plug-in FullCalendar to achieve CRUD of recurring schedule for drivers by Ajax',
       'Followed BDD/TDD process during developing',
       'Deployed the project on heroku (PaaS)'] },
        { header: 'Network Programming Technology (Python on Django)', subHeader: 'Online Q&A System', dates: '09/2017 - 12/2017', place:'Beijing, China', descriptions: ['Completed the front-end and back-end of a website, and deployed on local network IP address.',
        'At front-end: HTTP, used the CSS for display style design, the JS and AJAX for dynamic display',
        'At back-end: MySQL database and Django framework of python to realize desired functions'] },
        { header: 'Object-oriented Programming (C++)', subHeader: 'Game based on Socket Communication Client Server Mode', dates: '03/2017 - 06/2017', place:'Beijing, China', descriptions: ['Independently developed and tested the game',
        'Achieved functions of online player s battle based on socket communication'] },
    ]
};


const DescriptionEntryBuilder = (entries)  => (
    entries.map(entry =>
        <Description>{entry}</Description>
        )
);


const ResumeEntry = ({ header = '', subHeader = '', dates = '', place = '', descriptions = [] }) => (
    <ResumeEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
            <Dates>{dates}</Dates>
        </HeaderWrapper>
        <HeaderWrapper>
            <SubHeader>{subHeader}</SubHeader>
            <SubHeader>{place}</SubHeader>
        </HeaderWrapper>
        {DescriptionEntryBuilder(descriptions)}
    </ResumeEntryWrapper>
);




const resumeEntryBuilder = (entries) => (
    entries.map(entry =>
        <ResumeEntry
            header={entry.header}
            subHeader={entry.subHeader}
            dates={entry.dates}
            place={entry.place}
            descriptions={entry.descriptions} />
        )
)

export const Resume = () => (
    <ResumeWrapper>
        <NavBar />
        <MainContent>
        <SectionTitle>EDUCATION</SectionTitle>
        {resumeEntryBuilder(resumeObject.education)}
        <SectionTitle>WORK</SectionTitle>
        {resumeEntryBuilder(resumeObject.work)}
        <SectionTitle>PROJECT</SectionTitle>
        {resumeEntryBuilder(resumeObject.project)}
        </MainContent>
    </ResumeWrapper>
);