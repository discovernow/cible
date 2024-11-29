import Footer from "../(marketing)/footer";
import { Header } from "../(marketing)/header";

export default function Index() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-start self-stretch">
        <div className="flex px-8 pt-[54px] pb-[56px] md:px-16  md:pt-[65px] xl:pt-[99px] md:pb-[67px] xl:pb-[100px] justify-center items-center self-stretch bg-gradient-to-r from-[#0047BD] to-[#002157]">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 self-stretch">
              <div className="flex flex-col items-center self-stretch">
                <p className="text-[#F5F8FF] font-raleway text-center text-[24px] xl:text-[40px] font-semibold leading-[33.6px] xl:leading-[60px] self-stretch">
                  Have a project in mind? Get in touch.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 py-8 md:px-16 xl:px-[320px] xl:py-[64px] items-center md:items-start xl:items-start gap-[10px] self-stretch bg-[#F2F4F7]">
          <div className="flex flex-col px-4 md:px-[20px] xl:px-6 py-8 items-start gap-8 self-stretch rounded-[16px] bg-[#FFF]">
            <form className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex flex-col md:flex-row xl:flex-row items-start gap-[22px] self-stretch">
                <div className="flex flex-col items-start flex-auto self-stretch gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-[#111827] font-inter text-[14px] font-medium leading-[20px]"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your First Name"
                    required
                    className="
                    w-full py-2 px-3 border-b border-[#E5E7EB] outline-none"
                  />
                </div>
                <div className="flex flex-col items-start flex-auto self-stretch gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-[#111827] font-inter text-[14px] font-medium leading-[20px]"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your Last Name"
                    required
                    className="
                    w-full py-2 px-3 border-b border-[#E5E7EB] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-start gap-[22px] self-stretch">
                <div className="flex flex-col items-start flex-auto self-stretch gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#111827] font-inter text-[14px] font-medium leading-[20px]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="example@email.com"
                    required
                    className="
                    w-full py-2 px-3 border-b border-[#E5E7EB] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-start gap-[22px] self-stretch">
                <div className="flex flex-col items-start flex-auto self-stretch gap-2">
                  <label
                    htmlFor="location"
                    className="text-[#111827] font-inter text-[14px] font-medium leading-[20px]"
                  >
                    Location
                  </label>
                  <select className=" w-full py-2 px-2 border-b border-[#E5E7EB] outline-none text-[#6B7280] font-inter text-[14px] font-normal leading-[20px]">
                    <option selected>Select Your Location</option>
                    <option value="US">United State</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-[22px] self-stretch">
                <div className="flex flex-col items-start flex-auto self-stretch gap-2">
                  <label
                    htmlFor="message"
                    className="text-[#111827] font-inter text-[14px] font-medium leading-[20px]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="
                      border-[#E5E7EB] w-full rounded-md px-4 py-2 outline-none ring-1 ring-[#E5E7EB] focus:ring-2 focus:drop-shadow-lg"
                  />
                </div>
              </div>
            </form>

            <div className="flex flex-col items-start gap-4 self-stretch">
              <p className="text-[#6B7280] font-inter text-[12px] font-normal leading-[20px] self-stretch">
                Clicking below consents to Springwell emailing me exclusive
                updates. I agree to their privacy policy.
              </p>
              <div className="flex p-4 justify-center items-center gap-2 rounded-[32px] bg-[#444CE7] flex-col  self-stretch ">
                <div className="flex items-start gap-3 self-stretch">
                  <div className="flex flex-col items-start flex-auto self-stretch">
                    <button className="flex flex-col justify-center items-center gap-[10px] flex-auto self-stretch rounded-sm bg-[#444CE7]">
                      <div className="flex justify-center items-center gap-[7px]">
                        <p className="text-[#F9FAFB] text-center font-inter text-[16px] font-medium leading-[24px]">
                          Submit
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
