import ComponentModal from "../ComponentModal";
import SwiperCore from "swiper";
import Arrow from "../../assets/Pink_arrow.svg";

import styles from "./style.module.scss";
import { BlackBorderedSpace } from "../BlackBorderedSpace";
import SecondChart from "./SecondChart";
import {
  useCarsQuery,
  useClassificationChartQuery,
  useClassificationsQuery,
} from "../../redux/api/home";
import { useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetQueryId } from "../../hooks/useGetQueryId";
import { ClockLoader } from "react-spinners";

const PriceStatistics = () => {
  const { id } = useGetQueryId();
  const [part, setPart] = useState<number>(1);
  const [classification, setClassification] = useState<string>("");

  // RTK Requests
  const { data, isLoading, isError, error }: any = useCarsQuery(
    { id: `${id}`, part },
    { skip: !id }
  );
  const { data: classifications, isLoading: isLoadingClassifications } =
    useClassificationsQuery(+id!, {
      skip: !id,
      refetchOnMountOrArgChange: !!classification,
    });
  const {
    data: dataClassifications,
    isLoading: isLoadingClass,
    isError: isErrorClass,
  } = useClassificationChartQuery(
    {
      id: +id!,
      part,
      classification,
    },
    { skip: !id || !classification }
  );

  const swiperRef = useRef<SwiperCore | null>(null);

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

  const setClassificationHandler = (classificationName: string) => {
    if (classificationName.replace(/ /g, "_") == classification) {
      return setClassification("");
    }
    setClassification(classificationName.replace(/ /g, "_"));
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
            <SwiperSlide style={{ height: "155px" }}>
              {isLoading || isLoadingClass || isLoadingClassifications ? (
                <ClockLoader color="white" size={30} />
              ) : !isErrorClass ? (
                classification ? (
                  !isLoadingClass ? (
                    <SecondChart
                      bars={dataClassifications?.hourly_counts}
                      totalCount={dataClassifications?.total_cars}
                    />
                  ) : (
                    <ClockLoader color="white" size={30} />
                  )
                ) : (
                  <SecondChart
                    bars={data?.hourly_counts}
                    totalCount={data?.total_cars}
                  />
                )
              ) : (
                <>Fetch Error</>
              )}
            </SwiperSlide>

            <SwiperSlide style={{ height: "155px" }}>
              {isLoading || isLoadingClass || isLoadingClassifications ? (
                <ClockLoader color="white" size={30} />
              ) : !isErrorClass ? (
                classification ? (
                  !isLoadingClass ? (
                    <SecondChart
                      bars={dataClassifications?.hourly_counts}
                      totalCount={dataClassifications?.total_cars}
                    />
                  ) : (
                    <ClockLoader color="white" size={30} />
                  )
                ) : (
                  <SecondChart
                    bars={data?.hourly_counts}
                    totalCount={data?.total_cars}
                  />
                )
              ) : (
                <>Fetch Error</>
              )}
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
            {classifications?.map((item: string) => (
              <BlackBorderedSpace
                isActive={item.replace(/ /g, "_") == classification}
                height={20}
                width={152}
                onClick={() => setClassificationHandler(item)}
              >
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
