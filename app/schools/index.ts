import { ImageRef } from "@/utils/types"

export type SchoolFormDetailsType = {
    id: string
    schoolName: string,
    description: string,
    state: string,
    city: string,
    ownership: string,
    board: string,
    facultyStrength: string,
    studentStrength: string,
    address: {
        fullAddrs: string,
        phoneNumber: string,
        email: string,
        website?: string
    },
    schoolPhoto: ImageRef,
    bannerPhotos: ImageRef[]
    createdAt: string
    updatedAt: string
}

export type fetchIndividualSchoolData = {
    id: string
    schoolName: string,
    description: string,
    state: string,
    city: string,
    ownership: string,
    board: string,
    facultyStrength: string,
    studentStrength: string,
    address: {
        fullAddrs: string,
        phoneNumber: string,
        email: string,
        website?: string
    },
    schoolPhoto: ImageRef,
    bannerPhotos: ImageRef[]
    createdAt: string
    updatedAt: string
    SchoolReviews: {
        id: string,
        name: string
        content: string
        schoolId: string
        createdAt: string
        updatedAt: string
        photo: ImageRef
    }[]
}