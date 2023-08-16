import { useContext } from "react";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { DatalarContext, DateContext } from "../../component/state/stete";
import "./templ.scss";

export default function Template() {
  const { date, setDate } = useContext(DateContext);
  const { datalar, setdatalar } = useContext(DatalarContext);

  // console.log(datalar);
  const componentRef = useRef();
  const hendlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    // onAfterPrint: () => alert("print success"),
  });

  return (
    <>
      <div style={{ width: "65%", margin: "0 auto" }}>
        <div className="container" ref={componentRef}>
          <div className="left">
            <div className="img">
              <img src={date.Photo} alt="rasm bor" />
            </div>
            <div className="personal">
              <h1>Personal</h1>
              <div className="adress">
                <h4>
                  <i class="fa-solid fa-house"> </i> Adress
                </h4>
                <p>{date.Adress}</p>
              </div>
              <div className="phone">
                <h4>
                  {" "}
                  <i class="fa-solid fa-phone"> </i> Phone number
                </h4>
                <p>{date.Phone}</p>
              </div>
              <div className="email">
                <h4>
                  {" "}
                  <i class="fa-solid fa-envelope"> </i> Email
                </h4>
                <p>{date.Email}</p>
              </div>
              <div className="gender">
                <h4>
                  <i class="fa-solid fa-person-half-dress"> </i> Gender
                </h4>
                <p>{date.Gender}</p>
              </div>
              <div className="nationality">
                <h4>
                  {" "}
                  <i class="fa-solid fa-globe"></i> Nationality
                </h4>
                <p>{date.Nationality}</p>
              </div>
              <div className="marital">
                <h4>
                  {" "}
                  <i class="fa-solid fa-address-book"></i> Marital status
                </h4>
                <p>{date.Marital}</p>
              </div>
              <div className="driwe">
                <h4>
                  {" "}
                  <i class="fa-solid fa-car"></i> Driving licence
                </h4>
                <p>{date.Driving}</p>
              </div>
              <div className="website">
                <h4>
                  {" "}
                  <i class="fa-solid fa-laptop"></i> Website
                </h4>
                <p>{date.Website}</p>
              </div>
              <div className="linkidin">
                <h4>
                  {" "}
                  <i class="fa-brands fa-linkedin"></i> LinkedIn
                </h4>
                <p>{date.LinkedIn}</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="tugilgani">
              <h1 className="ism">
                {date.First} {date.Last}
              </h1>
              <span>{date.Day}</span> <span>{date.Month}</span>{" "}
              <span>{date.Year}</span>
            </div>
            <div className="skil">
              <div>
                <h3>Sikll</h3>
                <p>{datalar.skill}</p>
              </div>
              <div>
                <h3>Level</h3>
                <p>{datalar.Level}</p>
              </div>
            </div>
            <div className="language">
              <div>
                <h3>Language</h3>
                <p>{datalar.Language}</p>
              </div>
              <div>
                <h3>Level</h3>
                <p>{datalar.level}</p>
              </div>
            </div>
            <div className="work">
              <h2 className="heding">Work Exprience</h2>
              <div className="work__job">
                <div>
                  <h3>Job title</h3>
                  <p>{datalar.title}</p>
                </div>
                <div>
                  <h3>City/Town</h3>
                  <p>{datalar.spain}</p>
                </div>
                <div>
                  <h3>Empoloyer</h3>
                  <p>{datalar.employer}</p>
                </div>
              </div>
              <div className="work__start">
                <div className="work__start__data">
                  <h3>Start data</h3>
                  <p>
                    {datalar.oy} {datalar.yil}
                  </p>
                </div>
                <div className="work__End__datala">
                  <h3>End data</h3>
                  <p>
                    {datalar.oyla} {datalar.yilla}
                  </p>
                </div>
              </div>
              <div className="work__discribtion">
                <h3>Discribtion</h3>
                <p>{datalar.discribtion}</p>
              </div>
            </div>
            <div className="education">
              <h2 className="heding">Education</h2>
              <div className="education__ikki">
                <div className="education__ikki__degree">
                  <h3>Degree</h3>
                  <p>{datalar.Degree}</p>
                </div>
                <div className="education__ikki__town">
                  <div>
                    <h3>City/Town</h3>
                    <p>{datalar.Tashkent}</p>
                  </div>
                  <div>
                    <h3>School</h3>
                    <p>{datalar.school}</p>
                  </div>
                </div>
              </div>
              <div className="education__uch">
                <div>
                  <h3>Start data</h3>
                  <p>
                    {datalar.Oy} {datalar.Yil}
                  </p>
                </div>
                <div>
                  <h3>End data</h3>
                  <p>
                    {datalar.Oyla} {datalar.Yilla}
                  </p>
                </div>
              </div>
              <div className="education__tort">
                <h3>Describtion</h3>
                <p>{datalar.Describ}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="print">
          <button id="asd" onClick={hendlePrint}>
            Print
          </button>
        </div>
      </div>
    </>
  );
}
