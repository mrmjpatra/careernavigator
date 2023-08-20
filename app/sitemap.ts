import { getFormattedString } from "@/utils/functions";
import { getAllArticles, getAllCoachings, getAllColleges, getAllExams, getAllProjects, getAllSchools } from "@/utils/helper-fetch";

export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;

  // Get All Posts from CMS
  const colleges = await getAllColleges();
  const schools = await getAllSchools();
  const coachings = await getAllCoachings();
  const exams = await getAllExams();
  const articles = await getAllArticles();

  const projects = await getAllProjects();

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
  const examsUrl: { url: string; lastModified: Date }[] =
    exams?.map((exam: any) => {
      return {
        url: `${baseUrl}/exam/${exam.examLink}`,
        lastModified: new Date(),
      };
    }) ?? [];

  //projects url
  const projectsUrl: { url: string; lastModified: Date }[] =
    projects?.map((project: any) => {
      return {
        url: `${baseUrl}/cbse/projects/${getFormattedString(project.name,'-')}`,
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
    ...articlesUrl,
    ...projectsUrl,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cbse`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cbse/books`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cbse/syllabus`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cbse/practical-notes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cbse/exam-papers`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/chse`,
      lastModified: new Date(),
    },
  ];
}