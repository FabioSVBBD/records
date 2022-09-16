import { useState } from 'react';
import classNames from 'classnames';
import { DownArrow } from '../assets';
import { addLeadingZeros, numberOfDaysInMonth } from '../utils';

interface DayAndMonth {
  day: number;
  month: number;
}

const initializeDates = (date: Date): DayAndMonth[] => {
  return new Array(numberOfDaysInMonth(date.getMonth() + 1, date.getFullYear()))
    .fill(0)
    .map((_, idx) => ({
      day: ++idx,
      month: date.getMonth() + 1,
    }));
};

export const DatePicker = () => {
  const [active, setActive] = useState(false);
  const [dates, setDates] = useState<DayAndMonth[]>(
    initializeDates(new Date())
  );

  console.log('dates', dates);

  const dateFieldClass = classNames(
    'flex justify-between items-center text-xl bg-slate-50/50 h-12 rounded-md shadow-md px-4',
    { 'rounded-b-none': active }
  );

  const imgClass = classNames('h-2 mt-1', { 'rotate-180': active });

  return (
    <div className="m-auto w-28 relative">
      <section className={dateFieldClass} onClick={() => setActive(!active)}>
        <p>09/16</p>
        <img src={DownArrow} alt="down" className={imgClass} />
      </section>
      {active && (
        <section className="absolute bg-slate-50/50 w-full max-h-96 overflow-auto">
          {dates.map((date) => (
            <p className="flex justify-center items-center text-xl h-12 px-4">
              {addLeadingZeros(date.month)}/{addLeadingZeros(date.day)}
            </p>
          ))}
        </section>
      )}
    </div>
  );
};
