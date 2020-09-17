import React from "react";

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const SocialLink = (props) => (
    <a target=" _blank" rel="noopener noreferrer" href={props.url}>
        {props.children}
    </a>
);

const hobbies = [
    'Windsurfer',
    'Volleyball Player',
    'Runner'
];

const hobbyStringBuilder = (length = 3) => {
    const hobbyString = hobbies
        .map(hobby => ({hobby, randPos: Math.random()}))
        .sort((a, b) => a.randPos - b.randPos)
        .map(hobbyObject => hobbyObject.hobby)
        .slice(0, length)
        .join(' | ');
    console.log(hobbyStringBuilder)
    return hobbyString.toString();
};

export const Home = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <Avatar picture='images/mark-color.png'></Avatar>
            <Greeting>Howdy, I'm Ying!</Greeting>
            <Hobbies>{hobbyStringBuilder(3)}</Hobbies>
            <SocialLinks>
                <SocialLink url="https://www.linkedin.com/in/ying-lyu/">
                    <LinkedInIcon style={{ fontSize: 40}}/>
                </SocialLink>
                <SocialLink url="https://github.com/yinglyu">
                    <GitHubIcon style={{ fontSize: 40}}/>
                </SocialLink>
                <SocialLink url="https://twitter.com/fierce_fly">
                    <TwitterIcon style={{ fontSize: 40}}/>
                </SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);