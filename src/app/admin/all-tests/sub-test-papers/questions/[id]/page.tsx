import PageLayout from "@/components/Layouts/PageLayout";
import HeroQuestions from "@/components/page/admin/all-questions/Index";
import React from "react";

const page = ({params}: {params: {id: number}}) => {
  const {id} = params;

  return (
    <PageLayout>
      <HeroQuestions testPaperId={id} />
    </PageLayout>
  );
};

export default page;
