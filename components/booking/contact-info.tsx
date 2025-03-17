import React from "react"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

interface ContactDetail {
  icon: React.ElementType
  title: string
  details: string[]
}

interface ContactInfoProps {
  contactDetails: ContactDetail[]
}

export default function ContactInfo({ contactDetails }: ContactInfoProps) {
  return (
    <>
      {contactDetails.map((contact, index) => (
        <div key={index} className="flex items-start gap-3">
          <contact.icon className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900">{contact.title}</h3>
            {contact.details.map((detail, detailIndex) => (
              <p key={detailIndex} className="text-gray-600">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}