import ComponentModal from "../ComponentModal";
import SwiperCore from "swiper";
import Arrow from "../../assets/Pink_arrow.svg";

import styles from "./style.module.scss";
import { BlackBorderedSpace } from "../BlackBorderedSpace";
import SecondChart from "./SecondChart";
import {
  useCarsEventMutation,
  useCarsQuery,
  useClassificationsQuery,
} from "../../redux/api/home";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PriceStatistics = () => {
  const [id, setId] = useState<string | null>(null);
  const [part, setPart] = useState<number>(1);

  const [sendEvent, { isSuccess }] = useCarsEventMutation();
  const { data, isLoading, isError, error }: any = useCarsQuery(
    { id: `${id}`, part },
    { skip: !id || !isSuccess, refetchOnMountOrArgChange: part }
  );

  const { data: classifications, isLoading: isLoadingClassifications } =
    useClassificationsQuery({ id: id }, { skip: !id });

  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (id) {
      sendEvent(id);
    }
  }, [id]);

  useLayoutEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");
      setId(id);
    };

    window.addEventListener("popstate", handlePopState);

    handlePopState();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!isLoadingClassifications) {
      console.log("classifications", classifications);
    }
  }, [isLoadingClassifications]);

  const nextPartHandler = () => {
    if (part === 2) return;
    setPart(2);
    swiperRef.current?.slideNext();
  };
  const prevPartHandler = () => {
    if (part === 1) return;
    setPart(1);
    swiperRef.current?.slidePrev();
  };

  return (
    <ComponentModal
      title="Traffic Count"
      width={327}
      height={275}
      isLoading={isLoading}
      seeMore
    >
      {isLoading && "Loading"}
      {isError && <>{error.data.detail}</>}
      {!id && "Pick a point"}
      {data && (
        <div className={styles.container}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(slide) =>
              slide?.activeIndex == 0 ? setPart(1) : setPart(2)
            }
            spaceBetween={50}
            slidesPerView={1}
            allowSlideNext
            allowSlidePrev
          >
            <SwiperSlide>
              <SecondChart bars={data?.hourly_counts} />
            </SwiperSlide>
            <SwiperSlide>
              <SecondChart bars={data?.hourly_counts} />
            </SwiperSlide>
          </Swiper>

          <div className={styles.container_hours}>
            <p>{part === 1 ? "12am" : "12pm"}</p>
            <p>
              <div
                className={part === 1 || isLoading ? styles.disabled_image : ""}
              >
                <img src={Arrow} alt="BackArrow" onClick={prevPartHandler} />
              </div>
              <div
                className={part === 2 || isLoading ? styles.disabled_image : ""}
              >
                <img src={Arrow} alt="BackArrow" onClick={nextPartHandler} />
              </div>
            </p>
            <p>{part === 1 ? "12pm" : "12am"}</p>
          </div>
          <div className={styles.container_details}>
            {classifications.map((item: string) => (
              <BlackBorderedSpace height={20} width={152}>
                <div className={styles.container_details_text}>{item}</div>
              </BlackBorderedSpace>
            ))}
          </div>
        </div>
      )}
    </ComponentModal>
  );
};

export default PriceStatistics;
