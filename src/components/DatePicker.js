import React, { useState, useRef, useEffect } from "react";
import { DateRange, Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DatePicker.css";

const DatePicker = ({
  label = "Select Date",
  selectedRange,
  onChange,
  type = "date",
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // Handle date selection
  const handleSelect = (dateOrRanges) => {
    if (type === "date") {
      onChange({ date: dateOrRanges });
    } else {
      onChange({
        startDate: dateOrRanges.selection.startDate,
        endDate: dateOrRanges.selection.endDate,
      });
    }
  };

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="date-picker-container" ref={calendarRef}>
      {label && <label className="date-picker-label">{label}</label>}

      {/* Clickable Input Field for Both Date and Date Range */}
      <div
        className="date-picker-input-container"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <input
          type="text"
          className="date-picker-input"
          readOnly
          value={
            type === "date"
              ? selectedRange.date
                ? format(selectedRange.date, "yyyy-MM-dd")
                : "Select a date"
              : selectedRange.startDate && selectedRange.endDate
              ? `${format(selectedRange.startDate, "yyyy-MM-dd")} to ${format(
                  selectedRange.endDate,
                  "yyyy-MM-dd"
                )}`
              : "Select date range"
          }
        />
        <span
          className="calendar-icon"
          onClick={() => setShowCalendar(!showCalendar)}
        >📅</span>
      </div>

      {/* Unified Calendar UI */}
      {showCalendar && (
        <div className="calendar-container">
          {type === "date" ? (
            <Calendar
              date={selectedRange.date || new Date()}
              onChange={handleSelect}
              color="#007bff"
            />
          ) : (
            <DateRange
              ranges={[{
                startDate: selectedRange.startDate || new Date(),
                endDate: selectedRange.endDate || new Date(),
                key: "selection",
              }]}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              rangeColors={["#007bff"]}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
