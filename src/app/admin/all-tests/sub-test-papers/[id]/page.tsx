'use client'
import PageLayout from '@/components/Layouts/PageLayout'
import HeroAllTestPapers from '@/components/page/admin/allSubTestPapers/Index'
import React from 'react'

const page = ({params}: {params: {id: number}}) => {
  const {id} = params;
  return (
    <PageLayout>
        <HeroAllTestPapers testId={Number(id)}/>
    </PageLayout>
  )
}

export default page