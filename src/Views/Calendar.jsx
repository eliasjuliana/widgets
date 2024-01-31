import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const Calendar = () => {
    const [selected, setSelected] = useState(Date);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className="p-5 flex flex-col content-center items-center border shadow-md">
        <h2 className="text-xl font-bold mb-2">Calendar</h2>
        <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      // numberOfMonths={2}
      footer={footer}
    />
    </div>
  )
}

export default Calendar

