"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

import React from 'react'

const PatientForm = () => {
  return (
    <div>PatientForm</div>
  )
}

export default PatientForm
