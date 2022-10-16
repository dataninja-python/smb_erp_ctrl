import React from 'react';
import React from 'react';
import { isTemplateExpression } from 'typescript';



let initialFormIndex = 0;
//let initial formPageId = 1; 

export function FormPage() {
    const [ currentIndex, setCurrentIndex ] = React.useState(initialFormIndex);

    function handleBack() {
        setCurrentIndex((prev) => prev - 1)
    }
    
    function handleForward(){
        setCurrentIndex((prev) => prev + 1)
    }

    return (
        <>
            {currentIndex}
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleForward}>Next</button>
        </>
    )
}
