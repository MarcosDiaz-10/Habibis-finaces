import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormIngreso from "./FormIngreso.tsx"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel.tsx"
import { useState } from "react"
import { Card, CardContent } from "./ui/card.tsx"
import clsx from "clsx"

const mediosFisicos = [
    {
        id: "Bc",
        nombre: 'Banco',
    },
    {
        id: 'T',
        nombre: 'Totales',
    },
    {
        id: "Bn",
        nombre: 'Binace',
    },
    {
        id: 'Ef',
        nombre: 'Efectivo',

    },
    {
        id: 'Zl',
        nombre: 'Zinli',
    }
]


export default function TabsTotales() {
    const [medioSelected, setMedioSelected] = useState(mediosFisicos[0])
    return (
        <div className="flex flex-col items-center w-[95%] mt-5">

            <Carousel className=" flex items-center justify-center w-[75%] text-white ">
                <CarouselPrevious className="bg-azulOscuroApp border-azulOscuroApp" />

                <CarouselContent className="-ml-1 w-full ">
                    {
                        mediosFisicos.map((medio) => (
                            <CarouselItem key={medio.nombre} className={`basis-1/3`} >
                                <Card className={clsx(`bg-azulClaroApp flex items-center border-azulOscuroApp py-1  `, (medio.id === medioSelected.id) && 'bg-azulOscuroApp')}>
                                    <CardContent className="">
                                        <div onClick={() => setMedioSelected(medio)} className={`text-white   `}>{medio.nombre}</div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                        ))
                    }

                </CarouselContent>
                <CarouselNext className="bg-azulOscuroApp border-azulOscuroApp" />
            </Carousel>



            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-azulOscuroApp h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>
            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-azulOscuroApp h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>
            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-azulOscuroApp h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>
            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-azulOscuroApp h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>


        </ div>
    )
}
