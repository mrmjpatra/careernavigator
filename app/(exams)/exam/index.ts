

export type fetchExamDataType={
    id:string
    examName:string
    createdAt:string
    updatedAt:string
    overview:{
        overView:string
    }| null
    importantDate:{
        importantDate:string
    }| null
    eligibility:{
        eligibility:string
    }| null
    applicationForm:{
        applicationForm:string
    }| null
    admitCard:{
        admitCard:string
    }| null
    examPattern:{
        examPattern:string
    }| null
    syllabus:{
        syllabus:string
    }| null
    howToPrepare:{
        howToPrepare:string
    }| null
    books:{
        books:string
    }| null
    prevYearQues:{
        prevYearQues:string
    }| null
    result:{
        result:string
    }| null
    selectionProcess:{
        selectionProcess:string
    }| null
    answerKey:{
        answerKey:string
    } | null
}

// type OverView={
//     id:string
//     overView:string
//     examId:string
// }

// type ImportantDate={
//     id:string
//     importantDate:string
//     examId:string
// }
// type Eligibility={
//     id:string
//     eligibility:string
//     examId:string
// }
