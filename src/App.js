import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ProjectModal from './components/ProjectModal';

function App() {
    const [theme, setTheme] = useState('light');
    const [selectedProject, setSelectedProject] = useState(null);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <div className={`App ${theme} ${selectedProject ? 'modal-open' : ''}`}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
            <Header/>
            <main>
                <Education/>
                <Experience/>
                <Skills/>
                <Portfolio openProject={openProject}/>
            </main>
            <Footer/>
            {selectedProject && (
                <ProjectModal
                    title={selectedProject.title}
                    github={selectedProject.github}
                    description={selectedProject.description}
                    details={selectedProject.details}
                    onClose={closeProject}
                />
            )}
        </div>
    );
}

export default App;
