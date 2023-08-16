import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./abov.scss";
import { DatalarContext } from "../../component/state/stete";

export default function About() {
  const { datalar, setDatalar } = useContext(DatalarContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setDatalar(data);
  console.log(datalar);

  const month = [
    {
      label: "Month",
    },
    {
      label: "Yanvar",
      value: "Yanvar",
    },
    {
      label: "Fevral",
      value: "Fevral",
    },
    {
      label: "Mart",
      value: "Mart",
    },
    {
      label: "Aprel",
      value: "Aprel",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "Iyun",
      value: "Iyun",
    },
    {
      label: "Iyul",
      value: "Iyul",
    },
    {
      label: "Avgust",
      value: "Avgust",
    },
    {
      label: "sentyabr",
      value: "sentyabr",
    },
    {
      label: "Oktyabr",
      value: "Oktyabr",
    },
    {
      label: "Noyabr",
      value: "Noyabr",
    },
    {
      label: "Dekabr",
      value: "Dekabr",
    },
  ];
  const years = [
    {
      label: "Year",
    },
    {
      label: 1960,
      value: 1960,
    },
    {
      label: 1961,
      value: 1961,
    },
    {
      label: 1962,
      value: 1962,
    },
    {
      label: 1963,
      value: 1963,
    },
    {
      label: 1964,
      value: 1964,
    },
    {
      label: 1965,
      value: 1965,
    },
    {
      label: 1966,
      value: 1966,
    },
    {
      label: 1967,
      value: 1967,
    },
    {
      label: 1968,
      value: 1968,
    },
    {
      label: 1969,
      value: 1969,
    },
    {
      label: 1970,
      value: 1970,
    },
    {
      label: 1971,
      value: 1971,
    },
    {
      label: 1972,
      value: 1972,
    },
    {
      label: 1973,
      value: 1973,
    },
    {
      label: 1974,
      value: 1974,
    },
    {
      label: 1975,
      value: 1975,
    },
    {
      label: 1976,
      value: 1976,
    },
    {
      label: 1977,
      value: 1977,
    },
    {
      label: 1978,
      value: 1978,
    },
    {
      label: 1979,
      value: 1979,
    },
    {
      label: 1980,
      value: 1980,
    },
    {
      label: 1981,
      value: 1981,
    },
    {
      label: 1982,
      value: 1982,
    },
    {
      label: 1983,
      value: 1983,
    },
    {
      label: 1984,
      value: 1984,
    },
    {
      label: 1985,
      value: 1985,
    },
    {
      label: 1986,
      value: 1986,
    },
    {
      label: 1987,
      value: 1987,
    },
    {
      label: 1988,
      value: 1988,
    },
    {
      label: 1989,
      value: 1989,
    },
    {
      label: 1990,
      value: 1990,
    },
    {
      label: 1991,
      value: 1991,
    },
    {
      label: 1992,
      value: 1992,
    },
    {
      label: 1993,
      value: 1993,
    },
    {
      label: 1994,
      value: 1994,
    },
    {
      label: 1995,
      value: 1995,
    },
    {
      label: 1996,
      value: 1996,
    },
    {
      label: 1997,
      value: 1997,
    },
    {
      label: 1998,
      value: 1998,
    },
    {
      label: 1999,
      value: 1999,
    },
    {
      label: 2000,
      value: 2000,
    },
    {
      label: 2001,
      value: 2001,
    },
    {
      label: 2002,
      value: 2002,
    },
    {
      label: 2003,
      value: 2003,
    },
    {
      label: 2004,
      value: 2004,
    },
    {
      label: 2005,
      value: 2005,
    },
    {
      label: 2006,
      value: 2006,
    },
    {
      label: 2007,
      value: 2007,
    },
    {
      label: 2008,
      value: 2008,
    },
    {
      label: 2009,
      value: 2009,
    },
    {
      label: 2010,
      value: 2010,
    },
    {
      label: 2011,
      value: 2011,
    },
    {
      label: 2012,
      value: 2012,
    },
    {
      label: 2013,
      value: 2013,
    },
    {
      label: 2014,
      value: 2014,
    },
    {
      label: 2015,
      value: 2015,
    },
    {
      label: 2016,
      value: 2016,
    },
    {
      label: 2017,
      value: 2017,
    },
    {
      label: 2018,
      value: 2018,
    },
    {
      label: 2019,
      value: 2019,
    },
    {
      label: 2020,
      value: 2020,
    },
    {
      label: 2021,
      value: 2021,
    },
    {
      label: 2022,
      value: 2022,
    },
    {
      label: 2023,
      value: 2023,
    },
    {
      label: 2024,
      value: 2024,
    },
    {
      label: 2025,
      value: 2025,
    },
    {
      label: 2026,
      value: 2026,
    },
    {
      label: 2027,
      value: 2027,
    },
    {
      label: 2028,
      value: 2028,
    },
    {
      label: 2029,
      value: 2029,
    },
    {
      label: 2030,
      value: 2030,
    },
  ];


  return (  
    <>
      <div>
        <form className="forcha"  onSubmit={handleSubmit(onSubmit)}>
          <h2 className="heding">Language</h2>
          <div className="language">
            <label htmlFor="#">
              Language
              <input
                type="text"
                placeholder="Languages"
                {...register("Language", {})}
              />
            </label>
            <label htmlFor="#">
              Lavel
              <input
                type="text"
                placeholder="level"
                {...register("level", {})}
              />
            </label>
          </div>
          <h2 className="heding">Skills</h2>
          <div className="skill">
            <label htmlFor="#">
              Skills
              <input
                type="text"
                placeholder="skill"
                {...register("skill", {})}
              />
            </label>
            <label htmlFor="#">
              Lavel
              <input
                type="text"
                placeholder="Level"
                {...register("Level", {})}
              />
            </label>
          </div>
          <h2 className="heding">Work Experience</h2>
          <div className="titl">
            <label htmlFor="#">
              Job Title
              <input
                type="text"
                placeholder="title"
                {...register("title", {})}
              />
            </label>
            <label htmlFor="#">
              City/Town
              <input
                type="text"
                placeholder="spain"
                {...register("spain", {})}
              />
            </label>
          </div>
          <div>
            <label htmlFor="#">
              Employer
              <input
                className="enploy"
                type="text"
                placeholder="employer"
                {...register("employer", {})}
              />
            </label>
          </div>
          <div className="dayday">
            <label htmlFor="#">
              Start Data
              <div className="selec">
                <select {...register("oy", { require: true })}>
                  {month.map((mon) => (
                    <option value={mon.value}> {mon.label}</option>
                  ))}
                </select>
                <select {...register("yil", { require: true })}>
                  {years.map((year) => (
                    <option value={year.value}>{year.label}</option>
                  ))}
                </select>
              </div>
            </label>
            <label htmlFor="#">
              End Data
              <div className="selec">
                <select {...register("oyla", { require: true })}>
                  {month.map((mon) => (
                    <option value={mon.value}> {mon.label}</option>
                  ))}
                </select>
                <select {...register("yilla", { require: true })}>
                  {years.map((year) => (
                    <option value={year.value}>{year.label}</option>
                  ))}
                </select>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="#">
              Description
              <textarea
                placeholder="Text:"
                rows="6"
                cols="102"
                {...register("decribtion", {})}
              />
            </label>
          </div>
          <h2 className="heding">Education and Qualifications</h2>
          <div className="titl">
            <label htmlFor="#">
              Degree
              <input
                type="text"
                placeholder="title"
                {...register("Degree", {})}
              />
            </label>
            <label htmlFor="#">
              City/Town
              <input
                type="text"
                placeholder="spain"
                {...register("Tashkent", {})}
              />
            </label>
          </div>
          <div>
            <label htmlFor="#">
              School
              <input
                className="enploy"
                type="text"
                placeholder="New York University"
                {...register("school", {})}
              />
            </label>
          </div>
          <div className="dayday">
            <label htmlFor="#">
              Start Data
              <div className="selec">
                <select {...register("Oy", { require: true })}>
                  {month.map((mon) => (
                    <option value={mon.value}> {mon.label}</option>
                  ))}
                </select>
                <select {...register("Yil", { require: true })}>
                  {years.map((year) => (
                    <option value={year.value}>{year.label}</option>
                  ))}
                </select>
              </div>
            </label>
            <label htmlFor="#">
              End Data
              <div className="selec">
                <select {...register("Oyla", { require: true })}>
                  {month.map((mon) => (
                    <option value={mon.value}> {mon.label}</option>
                  ))}
                </select>
                <select {...register("Yilla", { require: true })}>
                  {years.map((year) => (
                    <option value={year.value}>{year.label}</option>
                  ))}
                </select>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="#">
              Description
              <textarea  placeholder="Text:" rows="6" cols="102" {...register("Decrib", {})} />
            </label>
          </div>
          <input id="asd" type="submit" />
        </form>
      </div>
    </>
  );
}
