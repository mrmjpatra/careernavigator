import { ImageRef } from "@/utils/types";

export type CoachingFetchDataType = {
    id: string
    coachingName: string,
    description: string,
    providing: string[],
    state: string,
    city: string,
    coachingPhoto: ImageRef,
    facultyStrength: string,
    address: {
        fullAddrs: string;
        phoneNumber: string;
        email: string;
        website?: string;
    },
    bannerPhoto: ImageRef[],
    createdAt: string
    updatedAt: string
}

export type FetchIndividualCoachingData = {
    id: string
    coachingName: string,
    description: string,
    providing: string[],
    state: string,
    city: string,
    coachingPhoto: ImageRef,
    facultyStrength: string,
    address: {
        fullAddrs: string;
        phoneNumber: string;
        email: string;
        website?: string;
    },
    bannerPhoto: ImageRef[],
    createdAt: string
    updatedAt: string
    CoachingReviews: {
        id: string,
        name: string
        content: string
        coachingId: string
        createdAt: string
        updatedAt: string
        photo: ImageRef
    }[]
}