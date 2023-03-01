const formulario = document.querySelector('#formulario')
const eMailto = document.querySelector('#emailto')

formulario.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  eMailto.setAttribute('href', `mailto:strelok.ivanov@gmail.com?subject=nombre ${form.get('nombre')}  correo ${form.get('email')}&body=${form.get('mensaje')}`)
  eMailto.click()
}