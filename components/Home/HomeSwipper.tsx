import NoticeCarousel from "./NoticeCarousel";
import { ImageRef } from "@/utils/types";
import BannerPhotos from "./BannerPhotos";


export type fetchBannerPhotosType = {
    banner: ImageRef
    id: string,
    createdAt: string,
    updatedAt: string
}
export type NoticeType = {
    id: String,
    title: string,
    link: string,
    createdAt: string,
    updatedAt: string
}

const fetchBanners = async (): Promise<fetchBannerPhotosType[]> => {
    const res = await fetch(`${process.env.HOST}/api/banners`);
    const data = await res.json();
    return data.message;
}


const fetchNotices = async () => {
    const res = await fetch(`${process.env.HOST}/api/notice`);
    const data = await res.json();
    const details: NoticeType[] = data.message;
    return details;
}

const HomeSwipper = async () => {
    const bannerPhotosData = fetchBanners();
    const sortedNoticesData = fetchNotices();
    const [bannerPhotos, notices] = await Promise.all([bannerPhotosData, sortedNoticesData]);
    const sortedNotices = notices.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
    return (
        <div className="flex flex-col md:flex-row px-4 py-4 gap-8">
            <div className="md:w-3/5">
                <BannerPhotos bannerPhotos={bannerPhotos} />
            </div>
            <div className="md:w-2/5">
                <div className="px-4">
                    <h1 className="font-bold text-3xl mb-5 text-blue-800">Notices</h1>
                    {
                        !notices && <p>Loading..........</p>
                    }
                    <NoticeCarousel sortedNotices={sortedNotices} />
                </div>
            </div>
        </div>
    )
}

export default HomeSwipper;


