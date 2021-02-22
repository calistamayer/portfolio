import React, { useEffect } from 'react';

function Navigation(props) {
    useEffect(() => {
        document.title = currentSection.title;
    }, [currentSection]);
    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    return (
        <div>
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
        </div>
    );
}

export default Navigation;