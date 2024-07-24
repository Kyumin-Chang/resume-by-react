import React from 'react';

function Skills() {
    return (
        <section className="skills container">
            <h2>기술 스택</h2>
            <div className="skills-grid">
                <article className="skill-category">
                    <h3>프론트엔드</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TypeScript</li>
                    </ul>
                </article>
                <article className="skill-category">
                    <h3>백엔드</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>Node.js</li>
                    </ul>
                </article>
                <article className="skill-category">
                    <h3>데이터베이스</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </article>
                <article className="skill-category">
                    <h3>도구</h3>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Skills;
