"use client"

import getIds from "@/actions/get-id"
import { useEffect } from "react"

export default function FavouritePage() {
  
  useEffect(function() {
    getIds().then(ids => console.log(ids))
  }, [])
  
  return null
}
