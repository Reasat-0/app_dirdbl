"use client";

import { Formik } from "formik";
import * as Yup from "yup";

import {
  AccountInfoCard,
  ContentContainer,
  DRadioBtn,
  DButton,
  DTypography,
  PageTitle,
  VerificationWithOTP,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";
import { myCardsDir } from "@/app/utils/moduleDirectories";

const ReportLostOrStolen = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const [showVerification, setShowVerification] = useState(false);

  const initialValues = { selection: "true" };

  const validationSchema = (values) => {
    console.log(values);
    const errors = {};
    if (!values.select) {
      errors.from_date = "From date is requied";
      alert("Please choose an option");
    }
    return errors;
  };

  const validationSchema2 = Yup.object().shape({
    selection: Yup.string().required("").nullable(),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    if (values?.selection.toLowerCase() === "yes") {
      setShowVerification(true);
    } else {
      router.push(myCardsDir);
    }
  };

  const LockOptions = [
    {
      label: "Yes",
      value: "true",
    },
    {
      label: "No",
      value: "false",
    },
  ];

  return (
    <ContentContainer>
      {showVerification && (
        <VerificationWithOTP
          willShowSuccess={true}
          noStepToggler={true}
          successMessage={t("temporaryLock.verificationSuccess")}
        />
      )}

      {!showVerification && (
        <>
          <PageTitle
            variant={"title"}
            text={t("temporaryLock.pageTitle")}
            hasSubtitle={true}
            utilClasses={"text-center"}
          />

          <PageTitle
            variant={"sub-title"}
            text={t("temporaryLock.pageSubTitle")}
            hasSubtitle={false}
            utilClasses={"text-center"}
          />
          <AccountInfoCard variant="small" />

          <Box className="">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema2}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <DTypography
                    variant={"medium2Bolder"}
                    textAccent={"darker"}
                    text={t("temporaryLock.doYouWantToLock")}
                  />
                  <DRadioBtn
                    name="selection"
                    value={values?.selection}
                    // checked={values.selection === item.value}
                    onChange={(e) => setFieldValue("selection", e.target.value)}
                    // onChange={() => setFieldValue("selection", item.value)}
                    radioOptions={LockOptions}
                  />

                  <DButton
                    type="submit"
                    variant={"primary-gradient-btn"}
                    takeFullWidth={true}
                    style={{ marginTop: "40px" }}
                    label={t("button.report")}
                  />
                </form>
              )}
            </Formik>
          </Box>
        </>
      )}
    </ContentContainer>
  );
};

export default ReportLostOrStolen;
