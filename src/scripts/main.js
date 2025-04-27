AOS.init();

const countEvent = () => {
  const eventDate = new Date('2025-12-12T19:00:00')
  const now = new Date()
  const diff = eventDate - now

  if (diff <= 0) {
    clearInterval(timer)
    document.getElementById('countEvent').innerText = 'Desculpe! Evento expirou!'
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0')
  const minutes = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0')
  const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0')

  document.getElementById('countEvent').innerText = `${days} dias ${hours}h ${minutes}m ${seconds}seg`
}

const timer = setInterval(countEvent, 1000)
