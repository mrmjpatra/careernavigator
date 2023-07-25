import { fetchCollegeDetailsWithCourses } from "@/app/colleges"

export type fetchCategoryList = {
    id: string,
    name: string
    link: string
    createdAt: string
    updatedAt: string
}

export const fetchDegree = async (): Promise<fetchCategoryList[]> => {
    try {
        const res = await fetch(`${process.env.HOST}/api/category/degree`, { next: { revalidate: 60 } });
        const data = await res.json();
        return data.message;
    } catch (error) {
        throw error;
    }
}
export const fetchStream = async (): Promise<fetchCategoryList[]> => {
    try {
        const res = await fetch(`${process.env.HOST}/api/category/stream`, { next: { revalidate: 60 } });
        const data = await res.json();
        return data.message;
    } catch (error) {
        throw error;
    }
}
export const fetchSpecialization = async (): Promise<fetchCategoryList[]> => {
    try {
        const res = await fetch(`${process.env.HOST}/api/category/specialization`, { next: { revalidate: 60 } });
        const data = await res.json();
        return data.message;
    } catch (error) {
        throw error;
    }
}


export const fetchCollegeDataWithCourse = async (): Promise<fetchCollegeDetailsWithCourses[]> => {
    try {
        const res = await fetch(`${process.env.HOST}/api/college/colleges/courses`, { next: { revalidate: 60 } });
        const data = await res.json();
        return data.message;
    } catch (error) {
        throw error;
    }
}