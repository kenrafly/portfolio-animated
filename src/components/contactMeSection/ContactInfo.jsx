import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="raflyaridansyahreal@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+628883093466" Image={FiPhone} />
      <SingleInfo text="Bangkalan, Indonesia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
