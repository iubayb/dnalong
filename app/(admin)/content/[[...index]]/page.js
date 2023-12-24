"use client"

import config from '@/sanity/config'
import { NextStudio } from 'next-sanity/studio'
import dynamic from 'next/dynamic'

function AdminPage() {
  return <NextStudio config={config} />
}

export default dynamic(() => Promise.resolve(AdminPage), {
  ssr: false,
})