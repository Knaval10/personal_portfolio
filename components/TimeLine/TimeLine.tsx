import React from "react";

export interface QualificationType {
  title: string;
  date: string;
  institute: string;
  keycourse: string[];
}
export interface QualificationPropsType {
  qualificationData: QualificationType[];
}
const TimeLine = ({ qualificationData }: QualificationPropsType) => {
  return (
    <div className="flex flex-col">
      {qualificationData?.length > 0 &&
        qualificationData.map((qual, idx) => (
          <div key={idx} className="flex gap-4">
            <section className="flex flex-col items-center ">
              <div className="bg-transparent border border-white w-2 h-2 rounded-full z-10" />
              {idx !== qualificationData.length - 1 && (
                <div className="w-px bg-white h-full" />
              )}
            </section>
            <section className="flex flex-col gap-1s -mt-2 pb-4">
              <h2 className="text-orange-400 text-xl font-semibold">
                {qual.title}
              </h2>
              <span className="text-sm text-white font-semibold">
                {qual.date}
              </span>
              <h3 className="text-xl text-white font-semibold">
                {qual.institute}
              </h3>
              <div className="flex gap-x-2 flex-wrap">
                {qual.keycourse.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2 ">
                    {idx !== 0 && (
                      <div className=" bg-white h-1 w-1 rounded-full" />
                    )}
                    <span className="text-sm text-white font-semibold">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ))}
    </div>
  );
};

export default TimeLine;
