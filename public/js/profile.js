const city = document.querySelector('#cityInput').value.trim();

if (city) {
  const response = await fetch(`/api/projects`, {
    method: 'POST',
    body: JSON.stringify({ city }),
    headers: {
    'Content-Type': 'application/json',
    },
    });

if (response.ok) {
  document.location.replace('/skyvisibility');
    } else {
      alert('Failed to save city');
    }
  };

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);


