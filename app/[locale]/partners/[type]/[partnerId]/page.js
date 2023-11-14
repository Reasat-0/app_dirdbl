import { SinglePage } from "@/app/utils/imports";

import { Global, PhoneIcon, HourGlassIcon } from "@/app/utils/iconImports";

import { discountPartners } from "@/app/Constants";

const PartnerPage = ({ params }) => {
  const pId = params?.partnerId;
  const footerOptions = [
    {
      id: 1,
      icon: <Global color="white" />,
      text: "https://google.com",
      useAsUrl: true,
    },
    {
      id: 2,
      icon: <PhoneIcon />,
      text: "This is footer text....",
      useAsUrl: false,
    },
    {
      id: 3,
      icon: <HourGlassIcon />,
      text: "This is footer text....",
      useAsUrl: false,
    },
  ];

  const discountData = discountPartners.find(
    (item) => item.id === parseInt(pId)
  );

  return (
    <SinglePage singlePageData={discountData} footerOptions={footerOptions} />
  );
};

export default PartnerPage;
