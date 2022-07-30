import { DiscordLogo, Lightning } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string}> ()

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          { slug 
            ? <Video lessonSlug={slug} /> 
            : 
              <div className="flex-1" >
      
              <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                  
                </div>
                </div>
              </div>
          }
          <Sidebar />
        </main>
      </div>
  )
}
