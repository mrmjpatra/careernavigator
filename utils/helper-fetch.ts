

export const getAllColleges = async () => {
    try {
        const res = await fetch(`${process.env.HOST}/api/college/all`,{next:{revalidate:120}});
        const json = await res.json()
        return json.message
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAllSchools = async () => {
    try {
        const res = await fetch(`${process.env.HOST}/api/school/all`,{next:{revalidate:120}});
        const json = await res.json()
        return json.message
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAllCoachings = async () => {
    try {
        const res = await fetch(`${process.env.HOST}/api/coaching/all`,{next:{revalidate:120}});
        const json = await res.json()
        return json.message
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAllExams = async () => {
    try {
        const res = await fetch(`${process.env.HOST}/api/exam`,{next:{revalidate:120}});
        const json = await res.json()
        return json.message
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getAllArticles = async () => {
    try {
        const res = await fetch(`${process.env.HOST}/api/articles`,{next:{revalidate:120}});
        const json = await res.json()
        return json.message
    } catch (error) {
        console.log(error);
        return null;
    }
}

