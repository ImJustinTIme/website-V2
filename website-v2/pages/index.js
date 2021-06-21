import Greeting from "../components/Greetings";
import Experience from "../components/Experience";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Home() {
  
  return (
    <div>
        <Greeting />
        <Experience />
    </div>
  )
}
