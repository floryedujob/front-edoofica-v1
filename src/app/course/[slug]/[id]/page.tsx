"use client"

import { Button, Icon } from "@components"
import { HeaderBack } from "@/components/Header"
import { useRouter } from "next/navigation"



function WatchCourse() {

    const router = useRouter()

  return (
    <div className="text-primary-gray ">
        <HeaderBack />
    </div>
  )
}

export default WatchCourse