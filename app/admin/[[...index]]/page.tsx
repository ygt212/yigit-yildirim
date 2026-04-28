'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function AdminPage() {
  return (
    <div className="fixed inset-0 z-[99999] bg-background overflow-hidden">
      <NextStudio config={config} />
    </div>
  );
}
