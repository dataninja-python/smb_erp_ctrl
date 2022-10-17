import React, { ReactElement, useState } from 'react';

export const formData = [
  {
    pageInd: 0,
    labelNames: ["First Name", "Last Name", "NickName", "Mobile"],
  },
  {
    pageInd: 1,
    labelNames: ["Birthday", "Mobile", "Gender", "Program"],
  },
  {
    pageInd: 2,
    labelNames: ["Pay Type", "Case Manager", "Case Manager Email", "Case Manager Mobile", "Case Manager Work Phone", "Case Manager Address"],
  },
  {
    pageInd: 3,
    labelNames: ["Emergency Contact", "Emergency Email", "Emergency Mobile Phone", "Emergency Work Phone", "Emergency Address"],
  },
];

export function useMultistepForm(steps: React.ReactElement[]) {
    const [pageInd, setPageInd] = useState(0);
    let currentPage = pageInd + 1;
    const totalPages = formData.length;

    function back() {
        setPageInd((prev) => {
            if (prev <= 0) {
                return prev
            }
            return prev - 1});
    }

    function next() {
        setPageInd((prev) => {
            if(prev >= totalPages - 1) {
                return prev
            }
            return prev + 1});
    }

    function viewPage(index: number) {
        setPageInd(() => index)
    }

    return {
        pageInd,
        page: currentPage,
        pages: totalPages,
        viewPage,
        back,
        next,
    }
}
