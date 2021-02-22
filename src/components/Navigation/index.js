import React from 'react';

function Navigation(props) {
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
                    <li>
                        About
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Resume
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;