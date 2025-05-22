"use client";

import MangaDetail from "@/components/MangaDetail";
import { mangaData } from "@/lib/data/manga";
import { notFound } from "next/navigation";
import { use } from "react";

export default function MangaDetailsPage({
  params: paramsPromise,
}: {
  params: Promise<{name: string}>;
}) {
  
  const { name } = use(paramsPromise);
  const formattedName = name.replace(/-/g, ' ');

  const manga = mangaData.find(
    a => a.title.toLowerCase() === formattedName.toLowerCase() 
  );

  if(!manga) {
    notFound();
  }
  
  return <MangaDetail manga={manga} />
}