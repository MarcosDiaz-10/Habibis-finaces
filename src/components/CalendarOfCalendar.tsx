import { useState } from "react"
import { Calendar } from "./ui/calendar"
import { getYear, getMonth, subDays, setMonth, setYear } from "date-fns"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import UltimasTransacciones from "./UltimasTransacciones.astro";

const daysGanacia = [
    subDays(new Date(), 2),
    subDays(new Date(), 4),
]

const daysBoth: Date[] = [
    subDays(new Date(), 1),

]

const daysPerdida = [
    subDays(new Date(), 2),
    subDays(new Date(), 3)
]
const startYear = getYear(new Date()) - 30
const endYear = getYear(new Date())

const months = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i)
export const CalendarOfCalendar = () => {


    const [date, setDate] = useState<Date | undefined>(new Date())

    const onMonthChange = (month: string) => {
        setDate(setMonth(date ?? new Date(), months.indexOf(month)))
    }
    const onYearChange = (year: string) => {
        setDate(setYear(date ?? new Date(), Number(year)))
    }


    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="flex w-[95%] justify-between">
                <Select
                    onValueChange={onMonthChange}
                    value={months[getMonth(date ?? new Date())]}

                >
                    <SelectTrigger className="w-[40%] bg-azulOscuroApp text-white border-azulOscuroApp">
                        <SelectValue placeholder='Months' className="text-white" />
                    </SelectTrigger>
                    <SelectContent className="h-full bg-azulOscuroApp text-white border-azulOscuroApp" >
                        {
                            months.map((month: string) => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <Select
                    onValueChange={onYearChange}
                    value={getYear(date ?? new Date()).toString()}
                >
                    <SelectTrigger className="w-[40%]  bg-azulOscuroApp text-white border-azulOscuroApp">
                        <SelectValue placeholder='years' />
                    </SelectTrigger>
                    <SelectContent className=" bg-azulOscuroApp text-white border-azulOscuroApp" >
                        {
                            years.map((year: number) => (
                                <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            <div className=" w-[95%] rounded-lg">

                <Calendar

                    mode="single"
                    modifiers={{
                        daysGanacia,
                        daysPerdida,
                        daysBoth
                    }}
                    modifiersClassNames={{
                        daysBoth: 'bg-linear-to-bl from-red-400 via-red-200 via-40%  via-green-300 via-40% to-green-400 text-black',
                        daysPerdida: 'bg-red-400',
                        daysGanacia: 'bg-green-400'

                    }}
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md bg-azulOscuroApp text-white "
                    classNames={{
                        cell: 'w-full text-center text-white',
                        head_cell: 'w-full',
                        head: 'text-gray-400',
                        day_today: 'bg-azulClaroApp',


                    }}
                    month={date}
                    onMonthChange={val => setDate(val)}
                />
            </div>

        </div>
    )
}
