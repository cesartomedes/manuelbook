// src/sanityClient.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '91841xyv',
  dataset: 'production',
  apiVersion: '2026-03-10',      
  useCdn: true,
  withCredentials: true,          
})