import React, { useEffect, useState } from "react";
// import "./styles.css";
function ThemeSwitch() {
    const [togglETHeme, setTogglETHeme] = useState(
        () => JSON.parse(localStorage.getItem("togglETHeme")) || "light-theme"
    );
    useEffect(() => {
        localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme));
        document.body.classList.add(togglETHeme);
        return () => {
            document.body.classList.remove(togglETHeme);
        };
    }, [togglETHeme]);

    

    return (
        <div className="theme-switch"
            onClick={() => togglETHeme === "light-theme" ? setTogglETHeme("dark-theme") : setTogglETHeme("light-theme")
            }
        >
            {togglETHeme === "light-theme" ? <i className="bi bi-sun-fill text-warning"></i> : <i class="bi bi-moon-fill"></i>}
        </div>
    );
}

export default ThemeSwitch;
