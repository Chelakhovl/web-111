document.addEventListener('partialsLoaded', () => {
    Promise.all([
        import('./script-header.js'),
    ])
    .then(() => {
        console.log('All scripts loaded successfully');
    })
    .catch(error => {
        console.error('Error loading scripts:', error);
    });
});