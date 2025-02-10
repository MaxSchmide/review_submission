import { useState } from "react";
import { RatingStars } from "./RatingStars";
import { RadioGroup } from "./RadioGroup";

export const ReviewForm = () => {
  const [rating, setRating] = useState(4);
  const [communicationResponse, setCommunicationResponse] = useState("yes");
  const [safetyResponse, setSafetyResponse] = useState("yes");
  const [timeResponse, setTimeResponse] = useState("yes");
  const [reviewType, setReviewType] = useState("anonymous");

  return (
    <form className="bg-white self-center w-[682px] max-w-full mt-10 py-[33px]">
      <div className="flex w-full flex-col px-9 max-md:max-w-full max-md:px-5">
        <h1 className="text-[#21272A] text-center text-[42px] font-bold leading-[1.1]">
          Your Review
        </h1>

        <div className="items-center border-b border-[#C1C7CD] bg-[#F2F4F8] self-stretch flex min-h-12 gap-2 text-base text-[#697077] font-normal leading-[1.4] flex-wrap mt-6 px-4 py-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/88a949a280bb3f4b674ca4e1f7cd161fecacae7faebb3d8d0e9abfb83edb08eb"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Supplier Selection"
          />
          <span className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            Supplier Selection
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/009b8f80da48648c863df79ce3ce31b5076bced976f618cbc917efc5e73f9367"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Dropdown"
          />
        </div>

        <div className="text-black text-base font-medium leading-[1.4] mt-6">
          General Rating
        </div>

        <RatingStars rating={rating} onChange={setRating} />

        <div className="flex w-[585px] max-w-full items-stretch gap-5 flex-wrap justify-between mt-6">
          <div className="flex flex-col text-base text-black font-medium leading-[1.1] gap-4">
            <div>Was communication smooth before and during delivery?</div>
            <div>Was the barge's safety and condition satisfactory?</div>
            <div>Was delivery on time as agreed?</div>
          </div>

          <div className="flex flex-col gap-4">
            <RadioGroup
              name="communication"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
              value={communicationResponse}
              onChange={setCommunicationResponse}
            />
            <RadioGroup
              name="safety"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
              value={safetyResponse}
              onChange={setSafetyResponse}
            />
            <RadioGroup
              name="time"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
              value={timeResponse}
              onChange={setTimeResponse}
            />
          </div>
        </div>

        <div className="text-black text-base font-medium leading-[19px] mt-9 max-md:max-w-full">
          Please provide details on the vessel crew's attendance for soundings
          before and after bunkering. If no one attended, please explain why.
        </div>
        <textarea
          className="flex-1 shrink border-b border-[#C1C7CD] bg-[#F2F4F8] min-h-[106px] gap-2 text-base text-[#697077] font-normal leading-[1.4] mt-4 pt-3.5 px-4 resize-none"
          placeholder="Your Answer"
        />

        <div className="text-black text-base font-medium leading-[19px] mt-9 max-md:max-w-full">
          Please share your impressions of the bunker delivery, including any
          irregularities, performance issues, or other relevant observations.
        </div>
        <textarea
          className="flex-1 shrink border-b border-[#C1C7CD] bg-[#F2F4F8] min-h-[106px] gap-2 text-base text-[#697077] font-normal leading-[1.4] mt-4 pt-3.5 px-4 resize-none"
          placeholder="Your Answer"
        />

        <div className="ml-3 mt-9 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[72%] max-md:w-full max-md:ml-0">
              <RadioGroup
                name="reviewType"
                options={[
                  { label: "Post review anonymously", value: "anonymous" },
                  {
                    label: "Post review publicly with my company name",
                    value: "public",
                  },
                ]}
                value={reviewType}
                onChange={setReviewType}
              />
            </div>
            <div className="w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <button
                type="submit"
                className="self-stretch bg-[rgba(98,129,202,1)] min-h-14 gap-2 text-base text-white font-medium leading-none mt-[25px] p-5 w-full"
              >
                Post review
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
