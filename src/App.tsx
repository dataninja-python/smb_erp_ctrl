import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import { containerWrapperStyles } from './data/FormStyles';
//import { FormPage } from './FormPage';

const formData = [
  {
    pageId: 0,
    pageNum: 1,
    pageName: "p1",
    LabelNames: ["First Name", "Last Name", "NickName"],
    BackButton: false,
    NextButton: true,
  },
  {
    pageId: 1,
    pageNum: 2,
    pageName: "p2",
    LabelNames: ["Birthday", "Email", "Mobile", "Gender", "Program"],
    BackButton: true,
    NextButton: true,
  },
  {
    pageId: 2,
    pageNum: 3,
    pageName: "p3",
    LabelNames: ["Pay Type", "Case Manager", "Case Manager Email", "Case Manager Mobile", "Case Manager Work Phone", "Case Manage Address"],
    BackButton: true,
    NextButton: true,
  },
  {
    pageId: 3,
    pageNum: 4,
    pageName: "p4",
    LabelNames: ["Emergency Contact", "Emergency Email", "Emergency Mobile Phone", "Emergency Work Phone", "Emergency Address"],
    BackButton: true,
    NextButton: false,
  },
];

const CssData: React.CSSProperties = {
  margin: "1.618em 1em",
}

function DefaultClick() {
  alert("no function passed to button!")
}

interface ButtonDefaultProps {
  btnText: string;
  btnType: string;
  btnStyle: React.CSSProperties;
  BtnOnClick: React.SyntheticEvent;
}

const btnDefaultData = [
  {
    btnText: "back",
    btnType: "button",
    btnStyle: CssData,
    btnOnClick: DefaultClick,
  },
]

function App() {
  const [formStep, setFormStep] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [nextTooHigh, setNextTooHigh] = useState(false);
  const [nextTooLow, setNextTooLow] = useState(true);

  const totalPages = formData.length;

  function back() {
    if (formStep === 0) {
      setIsFirst(() => true);
      return
    }
    setFormStep((prev) => prev - 1)
  }
  function next() {
    if (formStep === totalPages) {
      setIsLast(() = false);
      return
    }
    setFormStep((prev) => prev + 1)
  }
  function showPage() {
    //
  }

  return (
    <div style={containerWrapperStyles}>
      <ActivePage formStep={formStep} back={back} next={next} totalPages={totalPages}/>
    </div>
  )
}

function ActivePage({ formStep, back, next, totalPages }: {formStep: number, totalPages: number, back: React.SetStateAction<number>, next: React.SetStateAction<number>}) {
    return (
      <>
        <div style={{ margin: "1.618rem 1rem" }}>
      <CounterComponent formStep={formStep} totalPages={totalPages}/>
        </div>
        <div>
          <div style={{ margin: "1.618rem 1rem" }}>
      <button type="button" onClick={back}>Back</button>
          </div>
          <div>
      <button type="button" onClick={next}>Next</button>
          </div>
        </div>
      </>
    )
}

function CounterComponent({ formStep, totalPages }: {formStep: number, totalPages: number}) {
  return (
    <>
      <div>
      {formStep} / {totalPages}
      </div>
    </>
  )
}


export default App
