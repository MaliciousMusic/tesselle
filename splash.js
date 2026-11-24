// Splash une fois par session.
try { if (sessionStorage.getItem('tesselle.seen')) document.documentElement.className = 'seen'; else sessionStorage.setItem('tesselle.seen', '1') } catch (e) { document.documentElement.className = 'seen' }
document.addEventListener('pointerdown', function () { document.documentElement.classList.add('seen') }, { once: true })
