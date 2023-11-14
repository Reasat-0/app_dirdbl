import { CreateGoAccount, CustomContainer } from "@/app/utils/imports";

const CreateGoAccountPage = async ({ params }) => {
  return <CreateGoAccount langParam={params?.locale} />;
};

export default CreateGoAccountPage;
