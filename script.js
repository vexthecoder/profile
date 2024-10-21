const themes = {
    default: {
        background: "#0c1618",
        secondary: "#002931",
        primary: "#2a7152",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    winter: {
        background: "#d8dee9",
        secondary: "#c2c7d1",
        primary: "#004953",
        text: "black",
        textInverse: "black",
        font: "Roboto"
    },
    echo: {
        background: "#1c1c1c",
        secondary: "#333333",
        primary: "#4caf50",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    lime: {
        background: "#0c1618",
        secondary: "#002931",
        primary: "#32CD32",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    space: {
        background: "#121212",
        secondary: "#1a1a1a",
        primary: "#662d91",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    molten: {
        background: "black",
        secondary: "#211414",
        primary: "#ff6868",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    eaglenet: {
        background: "linear-gradient(to right, #665fd2, #9824d3)",
        secondary: "#9b219b",
        primary: "#4d004d",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    honey: {
        background: "#ffa15f",
        secondary: "#f2883e",
        primary: "black",
        text: "black",
        textInverse: "black",
        font: "Roboto"
    },
    swamp: {
        background: "#006072",
        secondary: "#004755",
        primary: "#15fc95",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    ruby: {
        background: "#0c1618",
        secondary: "#002931",
        primary: "#c01c73",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    squid: {
        background: "#0c1618",
        secondary: "#002931",
        primary: "#00b0f4",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    lemon: {
        background: "#0c1618",
        secondary: "#002931",
        primary: "#feeb01",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    connection: {
        background: "#1c1b29",
        secondary: "#2e835c",
        primary: "#99ffd0",
        text: "#43b581",
        textInverse: "#1c1b29",
        font: "Roboto"
    },
    dune: {
        background: "#d2c59d",
        secondary: "#7d7259",
        primary: "#282425",
        text: "#282425",
        textInverse: "#282425",
        font: "Roboto"
    },
    ice: {
        background: "#e8e8ea",
        secondary: "#cacae2",
        primary: "#005882",
        text: "black",
        textInverse: "black",
        font: "Roboto"
    },
    campfire: {
        background: "#333538",
        secondary: "#232528",
        primary: "#f17755",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    butter: {
        background: "#f7d5c5",
        secondary: "#e79974",
        primary: "#ff5200",
        text: "black",
        textInverse: "black",
        font: "Roboto"
    },
    box: {
        background: "#282828",
        secondary: "#000000",
        primary: "#fdf4c1",
        text: "#fdf4c1",
        textInverse: "#fdf4c1",
        font: "Roboto"
    },
    blackpink: {
        background: "black",
        secondary: "#202020",
        primary: "#f8708c",
        text: "#f8708c",
        textInverse: "#f8708c",
        font: "Roboto"
    },
    infinity: {
        background: "#030b11",
        secondary: "#0f4a7a",
        primary: "#008dff",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    tsunami: {
        background: "#121212",
        secondary: "#292929",
        primary: "#2493ff",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    chrome: {
        background: "#3c3c3c",
        secondary: "#2a2a2a",
        primary: "#abc6ff",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    tiktok: {
        background: "#121212",
        secondary: "#292929",
        primary: "#ff3b5c",
        text: "white",
        textInverse: "white",
        font: "Roboto"
    },
    // Continue adding the remaining themes here...
};

document.addEventListener('DOMContentLoaded', () => {
    const themeForm = document.getElementById('custom-theme-form');

    // Apply saved theme on page load if it exists
    const savedTheme = JSON.parse(localStorage.getItem('customTheme'));
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Theme button event listeners
    const buttons = document.querySelectorAll('.theme-options button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            applyTheme(themes[theme]);
            saveTheme(themes[theme]);
        });
    });

    // Handle custom theme form submission
    themeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const customTheme = {
            background: document.getElementById('background-color').value,
            text: document.getElementById('text-color').value,
            primary: document.getElementById('primary-color').value,
            secondary: document.getElementById('secondary-color').value,
            font: document.getElementById('font-family').value
        };
        applyTheme(customTheme);
        saveTheme(customTheme);
    });
});

// Function to apply a theme to the website
function applyTheme(theme) {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    document.body.style.fontFamily = theme.font;

    // Apply custom properties for primary and secondary colors
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--background', theme.background);
    document.documentElement.style.setProperty('--text', theme.text);
}

// Save theme to localStorage
function saveTheme(theme) {
    localStorage.setItem('customTheme', JSON.stringify(theme));
}