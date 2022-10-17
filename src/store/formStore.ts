import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

/*const formData = [
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

export const formDataTemplate = [
    {
        pageId: 0,
        pageData: [
            {
                firstName: "",
                lastName: "",
                nickName: "",
                mobile: "",
            }
        ],
        lastModified: Date.now()
    },
    {
        pageId: 1,
        pageData: [
            {
                email: "",
                birthday: "",
                gender: "",
                program: ""
            }
        ],
        lastModified: Date.now()
    },
    {
        pageId: 1,
        pageData: [
            {
                email: "",
                birthday: "",
                gender: "",
                program: ""
            }
        ],
        lastModified: Date.now()
    },
]

const formData = (set) => ({
    formStyles: [],
    addFormStyle: (formStyles) => {
        set((state) => ({
            formStyles: [formStyles, ...state.formStyles],
        }))
    },
    removeFormStyle: (formStyles) => {
        set((state) => ({
            formStyles: [formStyles, ...state.formStyles],
        }))
    },

})
*/
type FormPage = {
    pageId: number;
    pageQuestions: [];
    pageResponses:[];
    addPage: () => void;
    setNewPage: () => void;
    removePage: () => void;
}

/*function createId(anArray: []) {
    if(anArray === []) {
        newId = 0;
    }
    newId = anArray[-1].pageId + 1;
    return newId;
}*/

const useResidentStore = create<FormPage>((set) => ({
    formPages: [],
    newFormPage: {},
    addFormPage() {
        set((state) => ({
            ...state,
            formPages: addFormPage(state.formPages, state.newFormPage),
            newFormPage: FormPage,
        }))
    },
    setNewFormPage(formPage: FormPage) {
        set((state) => ({
            ...state,
            newFormPage: {},
        }))
    }
}));
