'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, XCircle } from 'lucide-react'
import { useState } from "react"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CopyButton from "@/components/ui/copyButton"
import contactForm


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let valid = true
    const newErrors = { name: '', email: '', subject: '', message: '' }

    // Validación del nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
      valid = false
    }

    // Validación del email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido"
      valid = false
    }

    // Validación del asunto
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio"
      valid = false
    }

    // Validación del mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío"
      valid = false
    }

    if (!valid) {
      setErrors(newErrors)
      return
    }

    // Si los datos son válidos, proceder al envío
    sendEmail()
  }

  const sendEmail = () => {
    const templateParams = {
      to_name: 'NestCodeStudio',
      from_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }

    emailjs.send('service_sxtg9sb', 'template_bar4d1c', templateParams, '6X4Y4k3hb0xENBt7c')
      .then((response) => {
        console.log('Mensaje enviado con éxito:', response)
        // Mostrar notificación de éxito
        toast.success('¡Mensaje enviado con éxito!', {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setErrors({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
      .catch((error) => {
        console.log('Hubo un error al enviar el mensaje:', error)
        // Mostrar notificación de error
        toast.error('Hubo un error al enviar el mensaje. Intenta de nuevo más tarde.', {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
        })
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const inputClassName = (field: keyof typeof formData) => {
    return errors[field] 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:ring-primary-500'
  }

  return (
    <div className="min-h-screen pt-28 lg:pt-28 xl:pt-32">



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between space-x-4 flex-wrap">
                  <div className="flex items-start space-x-4 w-full sm:w-auto">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">nestcodestudio@gmail.com</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto mt-2 sm:mt-0">
                    <CopyButton buttonText="Copiar" textToCopy="nestcodestudio@gmail.com" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between space-x-4 flex-wrap">
                  <div className="flex items-start space-x-4 w-full sm:w-auto">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold">Teléfono</h3>
                      <p className="text-gray-600">+1234567890</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto mt-2 sm:mt-0">
                    <CopyButton buttonText="Copiar" textToCopy="+1234567890" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between space-x-4 flex-wrap">
                  <div className="flex items-start space-x-4 w-full sm:w-auto">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold">Ubicación</h3>
                      <p className="text-gray-600">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto mt-2 sm:mt-0">
                    <CopyButton buttonText="Copiar" textToCopy="Buenos Aires, Argentina" />
                  </div>
                </div>
              </Card>
            </div>
          </div>


          {/* Contact Form */}
          <div>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClassName('name')}`}
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm flex items-center mt-1">
                      <XCircle className="h-4 w-4 mr-2" />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClassName('email')}`}
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm flex items-center mt-1">
                      <XCircle className="h-4 w-4 mr-2" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClassName('subject')}`}
                  />
                  {errors.subject && (
                    <div className="text-red-500 text-sm flex items-center mt-1">
                      <XCircle className="h-4 w-4 mr-2" />
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClassName('message')}`}
                  />
                  {errors.message && (
                    <div className="text-red-500 text-sm flex items-center mt-1">
                      <XCircle className="h-4 w-4 mr-2" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-right" />
    </div>
  )
}
