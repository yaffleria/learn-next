import { NextPage } from "next";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerDate = Date | null;

const DatePickerPage: NextPage = () => {
  const [selectedDate, setSelectedDate] = useState<DatePickerDate>(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        // minDate={new Date()}
        // maxDate={new Date()}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default DatePickerPage;
