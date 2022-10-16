import React from 'react';

export function FormPage({ handleBack, handleForward }) {

    return (
        <div>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleForward}>Next</button>
        </div>
    )
}
