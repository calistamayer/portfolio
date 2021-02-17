import React from 'react';

function Navigation() {
    return (
        <div>
            <h2>
                <a href="/">
                    Calista Mayer
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
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