import React from 'react';
import "../styles/skillsview.css";

const SkillsView = () => {
    return (
        <div>
            <h1>Skills</h1>
            <h2 className='skills-and-tools-header2'>Skills and tools I used / worked with:</h2>
            <img width={750} className="skills-image" src="https://skillicons.dev/icons?i=androidstudio,arduino,bash,bootstrap,c,codepen,css,dart,discord,bots,express,flutter,figma,firebase,git,github,gradle,html,idea,java,js,jquery,linkedin,linux,md,mastodon,materialui,maven,mongodb,mysql,nodejs,ps,php,postgres,postman,powershell,py,raspberrypi,react,regex,sass,stackoverflow,svg,twitter,ts,vercel,vim,visualstudio,vscode,wordpress&perline=10" />
        </div>
    )
}

export default SkillsView;