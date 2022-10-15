import React from 'react';

function FormPage1() {
    return (
        <>
            <p>Form Page 1</p>
        </>
    )
}

function FormPage2() {
    return (
        <>
            <p>Form Page 1</p>
        </>
    )
}

function FormPage3() {
    return (
        <>
            <p>Form Page 1</p>
        </>
    )
}

function FormPage4() {
    return (
        <>
            <p>Form Page 1</p>
        </>
    )
}

const formStepIndexStart = 0;
const formStepNumberStart = 1;
const formPageWrapper = 0;
const formElements: JSX.Element[] = [<FormPage1 />, <FormPage2 />, <FormPage3 />, <FormPage4 />]
const formPartNames: string[] = ["Part1", "Part2", "Part3", "Part4"]
const initFormPartNames: string[] = [""]
const initFormElements: JSX.Element[] = [<div></div>]

function buildObj( id, stepId, name, element ) {
    const temp = {
        pageId: id,
        formStep: stepId,
        stepName: name,
        JSXElement: element,
    },
    return temp
}

const createFormSteps = function(partNames=initFormPartNames, formElements=initFormElements) {
    const formParts = partNames.length + 1;
    const lowest = 1;
    const formObjArray = [];
    const initId = 0;
    const initStepNum = 1;
    for name in partNames::

}


const formSteps = [
    {
        pageId: 0,
        formStep: 1,
        pageElement: formElements[0],

    },
];

export function FormPageWrapper() {
    return (
        <>
            <p>Form Page Wrapper</p>
        </>
    )
}
