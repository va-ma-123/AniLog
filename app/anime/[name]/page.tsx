"use client"

import AnimeDetail from "@/components/AnimeDetail";
import { animeData } from "@/lib/data/anime";
import { notFound } from "next/navigation";
import { use } from "react";

export default function AnimeDetailsPage({ 
  params: paramsPromise, 
}: {
  params: Promise<{name: string}>;
}) {
  
  const { name } = use(paramsPromise);
  const formattedName = name.replace(/-/g, ' ');

  const anime = animeData.find(
    a => a.title.toLowerCase() === formattedName.toLowerCase()
  );

  if(!anime) {
    notFound();
  }

  return <AnimeDetail anime={anime} />
}