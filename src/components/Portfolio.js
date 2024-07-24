import React from 'react';
import './Portfolio.css';

function Project({title, onOpen}) {
    return (
        <div className="project-box" onClick={onOpen}>
            <h3>{title}</h3>
        </div>
    );
}

function Portfolio({openProject}) {
    const projects = [
        {
            title: "프로젝트 A",
            github: "http://example.com/project-a",
            description: "독서실 좌석 관리 시스템 개발",
            details: "이 프로젝트는 독서실의 좌석을 효율적으로 관리하기 위한 시스템을 개발하는 것을 목표로 했습니다. 사용자는 실시간으로 좌석 예약 및 조회를 할 수 있으며, 관리자 모드는 전체 좌석의 상태를 한 눈에 확인하고 관리할 수 있도록 합니다. 주요 기능으로는 좌석 예약, 시간 관리, 사용자 통계 등이 포함됩니다."
        },
        {
            title: "프로젝트 B",
            github: "http://example.com/project-b",
            description: "헬스 케어 서비스 개발",
            details: "이 프로젝트는 사용자들의 건강 관리를 돕기 위한 헬스 케어 서비스를 개발하는 것을 목표로 했습니다. 주요 기능으로는 개인 맞춤형 운동 계획 제공, 식단 관리, 건강 상태 모니터링 등이 있습니다. 사용자는 자신의 건강 데이터를 입력하여 실시간으로 건강 상태를 추적하고, 목표 달성을 위한 조언을 받을 수 있습니다."
        },
        {
            title: "프로젝트 C",
            github: "http://example.com/project-c",
            description: "반려견 관련 상품 판매 서비스 개발",
            details: "이 프로젝트는 반려견 관련 상품을 판매하는 온라인 쇼핑몰을 개발하는 것을 목표로 했습니다. 주요 기능으로는 상품 검색 및 필터링, 장바구니 기능, 주문 관리, 리뷰 시스템 등이 있습니다. 사용자들은 다양한 반려견 용품을 쉽게 찾아 구매할 수 있으며, 리뷰를 통해 상품에 대한 피드백을 공유할 수 있습니다."
        }
    ];

    return (
        <section className="portfolio container">
            <h2>포트폴리오</h2>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    onOpen={() => openProject(project)}
                />
            ))}
        </section>
    );
}

export default Portfolio;
