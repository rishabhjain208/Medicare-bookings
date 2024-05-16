import { formateDate } from "../../utils/formateDate";
const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">
          {about}
          {/* Dr. Farid Uddin is a highly skilled surgeon renowned for his expertise
          in advanced surgical procedures. With years of experience, he has
          earned a reputation for excellence in surgical practice. Dr. Uddin
          specializes in intricate surgical techniques, ensuring optimal patient
          outcomes. His commitment to patient care and innovation distinguishes
          him as a leader in the field of surgery. */}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-30px text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 sm:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end sm:gap-5 mb-30px"
            >
              <div>
                <span className="text-irisBlueColor text-15px leading-6 font-semibold">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                </span>
                <p className="text-16px leading-6 font-medium text-textColor">
                  {item.degree}
                </p>
              </div>
              <p className="text-14px leading-5 font-medium text-textColor">
                {item.university}
              </p>
            </li>
          ))}
        </ul>

        {/* <ul className="pt-4 sm:p-5"> 
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end sm:gap-5 mb-30px">
            <div>
              <span className="text-irisBlueColor text-15px leading-6 font-semibold">
                {formateDate("1-02-2008")} - {formateDate("5-08-2010")}
              </span>
              <p className="text-16px leading-6 font-medium text-textColor">
                MD in Surgeon
              </p>
            </div>
            <p className="text-14px leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul> */}
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-30px text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:gird-cols-2 gap-[30px] pt-4 md:p-5 max-w-md">
          {experiences?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[16px] font-semibold leading-6">
                {formateDate(item.startingDate)} -{" "}
                {formateDate(item.endingDate)}
              </span>
              <p className="text-16px leading-6 font-medium text-textColor">
                {item.position}
              </p>
              <p className="text-14px leading-5 font-medium text-textColor">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>

        {/* <ul className="grid sm:gird-cols-2 gap-[30px] pt-4 md:p-5 max-w-md">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[16px] font-semibold leading-6">
              {formateDate("12-02-2014")} - {formateDate("10-02-2016")}
            </span>
            <p className="text-16px leading-6 font-medium text-textColor">
              Jr. Surgeon
            </p>
            <p className="text-14px leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default DoctorAbout;
