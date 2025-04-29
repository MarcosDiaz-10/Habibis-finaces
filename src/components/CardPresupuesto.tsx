

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const CardPresupuesto = ({title, className = ''}:{title:string, className?:string}) => {

    const [isOpen, setIsOpen] = useState(false)



    return (
        <Card className={clsx(className)}>
            <CardHeader className="flex w-full justify-between hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <CardTitle className="text-xl font-bold">
                   {title} 
                </CardTitle>
                <ChevronRight className={clsx('transition-all easy-in',isOpen && "transform rotate-90")}/>
            </CardHeader>
            <CardContent>
                <div className={clsx(
                    'transition-all easy-out  ',
                    !isOpen && 'opacity-0 scale-y-0 h-0', 
                    isOpen && 'opacity-100 scale-y-100 h-auto')
                }>Hola</div>
                <div className="flex justify-end">
                    <Button  className="bg-[#132233] text-white">Ver Presupuesto</Button>
                </div>
            </CardContent>

        </Card>
    )
}
