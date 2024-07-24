import React from 'react';

function Experience() {
    return (
        <section className="experience container">
            <h2>경력</h2>
            <ul className="container-list">
                <li>
                    <h3>OOO 회사</h3>
                    <p>직책: 백엔드 개발자</p>
                    <p>근무 기간: 2022-2023</p>
                    <p>주요 업무: 백엔드 개발 및 유지보수</p>
                </li>
            </ul>
            <ul className="container-list">
                <li>
                    <h3>OOO 회사</h3>
                    <p>직책: 풀스택 개발자</p>
                    <p>근무 기간: 2023-2024</p>
                    <p>주요 업무: 웹 애플리케이션 개발 및 유지보수</p>
                </li>
            </ul>
        </section>
    );
}

export default Experience;
