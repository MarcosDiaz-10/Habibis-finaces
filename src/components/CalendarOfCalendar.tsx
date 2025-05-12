import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { subDays } from "date-fns"

const daysGanacia = [
    subDays(new Date(), 2),
    subDays(new Date(), 4),
]

const daysPerdida = [
    subDays(new Date(), 2),
    subDays(new Date(), 3)
]

export const CalendarOfCalendar = () => {



    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div className=" w-[90%]">
            <Calendar

                mode="single"
                modifiers={{
                    daysGanacia,
                    daysPerdida
                }}
                modifiersClassNames={{
                    daysGanacia: 'bg-green-300 text-black',
                    daysPerdida: 'bg-red-300'

                }}
                selected={date}
                onSelect={setDate}
                className="rounded-md bg-[#090d2b] text-white "
                classNames={{
                    cell: 'w-full text-center text-white',
                    head_cell: 'w-full',
                    head: 'text-gray-400',
                    day_today: 'bg-[#132233]',


                }}
            />
        </div>
    )
}
