import React, { useEffect } from 'react';

function Navigation(props) {

    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    useEffect(() => {
        document.title = currentSection.title;
    }, [currentSection]);

    return (
        <header>
            <h2>
                <a href="/">
                    Calista Mayer
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {sections.map((section) => (
                        <li classname={`${currentSection.title === section.title && 'navActive'
                            }`} key={section.name}>
                                <span
                                    onClick={() => {
                                        setCurrentSection(section)
                                    }}
                                >
                                    {section.title}
                                </span>
                            </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;