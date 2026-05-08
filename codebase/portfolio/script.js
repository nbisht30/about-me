const body = document.body
const btnThemeLabel = document.getElementById('btn-theme-label')
const btnThemeToggle = document.getElementById('btn-theme-toggle')
const btnHamburger = document.querySelector('.nav__hamburger i')
const storedTheme = localStorage.getItem('portfolio-theme')

const setTheme = (themeName) => {
	body.classList.remove('light', 'dark')
	body.classList.add(themeName)
	btnThemeLabel.textContent = themeName === 'dark' ? 'light mode' : 'dark mode'
	btnThemeToggle.setAttribute('aria-label', `switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`)
	localStorage.setItem('portfolio-theme', themeName)
}

const toggleTheme = () => {
	const nextTheme = body.classList.contains('dark') ? 'light' : 'dark'
	setTheme(nextTheme)
}

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top');
	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block';
	} else {
		btnScrollTop.style.display = 'none';
	}
};

btnThemeToggle.addEventListener('click', toggleTheme)
btnHamburger.addEventListener('click', displayList)
document.addEventListener('scroll', scrollUp)

setTheme(storedTheme === 'dark' ? 'dark' : 'light')
