import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    return (

                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                        <label className="day">{forecastDays[index]}</label>
                                        <label className="description">{item.weather[0].description}</label>
                                        <label className="temp">{Math.round(item.main.temp)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel></AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    );
}
export default Forecast;