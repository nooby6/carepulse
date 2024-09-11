import { Button } from "@/components/ui/button";
import PatientForm from "@/components/ui/forms/PatientForm";
import Image from "next/image"
export default function Home() {

    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image 
        src="/assets/icons/logo-full.svg" 
        height={1000}
        width={1000}
        alt="patient"
        className="nb-12 h-10 w-fit"
        />

        <PatientForm/>

        <div className="text-14-regular"></div>

      </div>
    </section>
  )
}
