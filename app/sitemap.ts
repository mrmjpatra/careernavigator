import { getFormattedString } from "@/utils/functions";
import { getAllArticles, getAllCoachings, getAllColleges, getAllExams, getAllSchools } from "@/utils/helper-fetch";

export default async function sitemap() {
  const baseUrl = 'https://careernavigator.vercel.app';

  // Get All Posts from CMS
  const colleges = await getAllColleges();
  const schools = await getAllSchools();
  const coachings = await getAllCoachings();
  const exams = await getAllExams();
  const articles = await getAllArticles();

  //collegeurl
  const collegesUrl =
    colleges?.map((college: any) => {
      return {
        url: `${baseUrl}/colleges/${getFormattedString(college.collegeName, '-')}`,
        lastModified: new Date(),
      };
    }) ?? [];
    //schools urls
  const schoolsUrl =
    schools?.map((school: any) => {
      return {
        url: `${baseUrl}/schools/${getFormattedString(school.schoolName, '-')}`,
        lastModified: new Date(),
      };
    }) ?? [];
    
    //coaching url
  const coachingsUrl =
    coachings?.map((coaching: any) => {
      return {
        url: `${baseUrl}/coachings/${getFormattedString(coaching.coachingName, '-')}`,
        lastModified: new Date(),
      };
    }) ?? [];
    //exam url
  const examsUrl =
    exams?.map((exam: any) => {
      return {
        url: `${baseUrl}/exam/${exam.examLink}`,
        lastModified: new Date(),
      };
    }) ?? [];
    //article url
  const articlesUrl =
    articles?.map((article: any) => {
      return {
        url: `${baseUrl}/articles/${getFormattedString(article.title, '-')}`,
        lastModified: new Date(),
      };
    }) ?? [];

  

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...collegesUrl,
    ...schoolsUrl,
    ...coachingsUrl,
    ...examsUrl,
    ...articlesUrl
  ];
}