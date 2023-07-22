import { ImageRef } from "@/utils/types";

export type fetchCollegeDetailsWithCourses = {
    id: string,
    collegeName: string,
    description: string,
    state: string,
    city: string,
    ownership: string,
    collegePhoto: ImageRef;
    bannerPhotos: ImageRef[]
    campusSize: string;
    facultyStrength: string;
    studentStrength: string;
    address: {
        fullAddrs: string;
        phoneNumber: string;
        email: string;
        website: string | null;
    };
    courses: {
        id: string;
        courseName: string;
        courseDetails: string;
        stream: string;
        degree: string;
        specialization: string;
        courseType: string;
        studyMode: string;
        collegeId: string
        createdAt: string
        updatedAt: string
    }[];
}

export type fetchAllCollegeDataType = {
    id: string,
    collegeName: string,
    description: string,
    state: string,
    city: string,
    ownership: string,
    collegePhoto: ImageRef;
    bannerPhotos: ImageRef[]
    campusSize: string;
    facultyStrength: string;
    studentStrength: string;
    address: {
        fullAddrs: string;
        phoneNumber: string;
        email: string;
        website?: string;
    };
    courses: {
        id: string;
        courseName: string;
        courseDetails: string;
        stream: string;
        degree: string;
        specialization: string;
        courseType: string;
        studyMode: string;
        collegeId: string
        createdAt: string
        updatedAt: string
    }[];
    reviews: {
        id: string,
        name: string
        content: string
        collegeId: string
        createdAt: string
        updatedAt: string
        photo: ImageRef
    }[]
}

