import { womenCategoryFilters } from '@/constants/Categorydata';
import React, { useState } from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import PriceRangeSlider from '../PriceRange';

const Filters = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='max-w-72 border-2 border-lightGray'>
            <Accordion type="single" collapsible className="border-b-2 border-lightGray" >
                <AccordionItem value="filters" >
                    <AccordionTrigger className="py-5 px-6">Filters</AccordionTrigger>
                    <AccordionContent className="py-5 px-6">
                        {womenCategoryFilters.map((category) => (
                            <div className='flex font-semibold text-darkGray text-sm pb-4 items-center justify-between'>
                                <h2>{category}</h2>
                                <IoIosArrowForward />
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price-filter" >
                    <AccordionTrigger className="py-5 px-6">Price</AccordionTrigger>
                    <AccordionContent>
                        <PriceRangeSlider min={0} max={1000} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Filters



/*
 <Accordion type="single" collapsible className="py-5 px-5" >
                <AccordionItem value="filters" >
                    <AccordionTrigger className="">Filters</AccordionTrigger>
                    <AccordionContent>
                        {womenCategoryFilters.map((category) => (
                            <div className='flex font-semibold text-darkGray text-sm pb-4 items-center justify-between'>
                                <h2>{category}</h2>
                                <IoIosArrowForward />
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="price-filter" >
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                       <PriceRangeSlider min={0} max={1000}/>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
*/