import { SetUpProfile } from "@/app/utils/imports";

const SetProfile = ({ params }) => {
  return <SetUpProfile signInVia={params?.signInVia} />;
};

export default SetProfile;
