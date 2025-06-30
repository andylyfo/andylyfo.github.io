document.addEventListener('DOMContentLoaded', function() {
  const username = 'andylyfo';
  const contributionsSection = document.getElementById('github-contributions');

  if (!contributionsSection) return;

  contributionsSection.innerHTML = '<p>Loading GitHub contributions...</p>';

  contributionsSection.innerHTML = `
    <div class="github-calendar-container">
      <iframe 
        src="https://ghchart.rshah.org/${username}" 
        width="100%" 
        height="100" 
        frameborder="0" 
        scrolling="no">
      </iframe>
    </div>
  `;
});