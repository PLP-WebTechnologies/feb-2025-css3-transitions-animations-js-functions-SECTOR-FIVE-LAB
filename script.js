// User preferences management
const PREFERENCES = {
    THEME: 'theme',
    ANIMATIONS: 'animations'
};

// Initialize preferences from localStorage or set defaults
function initializePreferences() {
    const theme = localStorage.getItem(PREFERENCES.THEME) || 'light';
    const animations = localStorage.getItem(PREFERENCES.ANIMATIONS) || 'enabled';
    
    applyTheme(theme);
    applyAnimations(animations);
}

// Save preference to localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Apply theme to the document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    savePreference(PREFERENCES.THEME, theme);
}

// Apply animation state
function applyAnimations(state) {
    if (state === 'disabled') {
        document.body.classList.add('no-animation');
    } else {
        document.body.classList.remove('no-animation');
    }
    savePreference(PREFERENCES.ANIMATIONS, state);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Toggle animations
function toggleAnimations() {
    const currentState = document.body.classList.contains('no-animation') ? 'disabled' : 'enabled';
    const newState = currentState === 'enabled' ? 'disabled' : 'enabled';
    applyAnimations(newState);
}

// Animate element on click
function animateElement(element) {
    element.classList.add('animate');
    setTimeout(() => {
        element.classList.remove('animate');
    }, 1000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize preferences
    initializePreferences();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Animation toggle
    const animationToggle = document.getElementById('animationToggle');
    animationToggle.addEventListener('click', toggleAnimations);

    // Animated box click
    const animatedElement = document.getElementById('animatedElement');
    animatedElement.addEventListener('click', () => animateElement(animatedElement));

    // Card button clicks
    const cardButtons = document.querySelectorAll('.card-btn');
    cardButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
    });
}); 