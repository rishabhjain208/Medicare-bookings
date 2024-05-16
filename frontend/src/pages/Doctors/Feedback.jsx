import { AiFillStar } from "react-icons/ai";
import image from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={review.user?.photo} alt="" className="w-full" />
              </figure>
              <div>
                <h5 className=" font-bold text-xl text-primaryColor">
                  {review.user?.name}
                </h5>
                <p className="text-textColor text-[16px] font-semibold leading-6">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text__para">{review.reviewText}</p>
              </div>
            </div>
            <p className="gap-1 flex">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} className="text-yellowColor" />
              ))}
            </p>
          </div>
        ))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
