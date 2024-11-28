import { useTranslation } from "react-i18next";
import logo from "../assets/FAQ/Icon.svg";

const Conditions = () => {

  const { t  } = useTranslation();

  return (
    <section className="max-w-[97rem] mx-auto ">
      <div className="py-4 sm:py-8 px-7 flex-col flex gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-[2rem] text-[#1F2732] font-medium text-center">
          {t("TermsConditionsTitle")}
          </h1>
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-3xl  text-red font-semibold  text-center">
          {t("TermsConditionsLastUpdate")} 
          </h3>
          <img src={logo} alt="FAQ`s icon" />
        </div>
        <div className="p-2 text-sm font-normal text-[#696969] ">
            <p>{t("welcomeToYJOZ")}</p>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("YJOZPlatformIntro")}</p>
            <ol className=" order-last px-2">
                <li>{t("YJOZOwnersDescription")}</li>
                <li>{t("YJOZRenterCommunication")}</li>
                <li>{t("YJOZRenterPayment")}</li>
                <li>{t("YJOZDisputeResolution")}</li>
            </ol>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("YJOZPlatformTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("YJOZSocialFeaturesIntro")}</li>
                <li>{t("YJOZAcceptableUseCompliance")}</li>
            </ol>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("CreateAccountTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("CreateAccountRequirements")}</li>
                <li>{t("CreateAccountStepA")}</li>
                <li>{t("CreateAccountStepB")}</li>
                <li>{t("AgeRequirement")}</li>
                <li>{t("AccountResponsibility")}</li>
            </ol>
        </div>
        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("RelationshipTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("TermsOverview")}</li>
                <li>{t("AdditionalTerms")}</li>
                <li>{t("AgreementStatement")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("PrecautionsTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("PlatformDisclaimer")}</li>
                <li>{t("OwnerResponsibility")}</li>
                <li>{t("OwnerLegalObligations")}</li>
                <li>{t("RenterResponsibility")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("RightsToUseTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("PlatformOwnership")}</li>
                <li>{t("PersonalUsage")}</li>
                <li>{t("RestrictionA")}</li>
                <li>{t("RestrictionB")}</li>
                <li>{t("RestrictionC")}</li>
                <li>{t("RestrictionD")}</li>
                <li>{t("IntellectualProperty")}</li>
                <li>{t("NoOwnershipRights")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("RulesOfAcceptableUseTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("RulesOfAcceptableUseIntro")}</li>
                <li>{t("Rule1")}</li>
                <li>{t("Rule2")}</li>
                <li>{t("Rule3")}</li>
                <li>{t("Rule4")}</li>
                <li>{t("Rule5")}</li>
                <li>{t("Rule6")}</li>
                <li>{t("Rule7")}</li>
                <li>{t("Rule9")}</li>
                <li>{t("Rule10")}</li>
                <li>{t("Rule11")}</li>
                <li>{t("Rule12")}</li>
                <li>{t("Rule13")}</li>
                <li>{t("Rule14")}</li>
                <li>{t("Rule15")}</li>
                <li>{t("Rule16")}</li>
                <li>{t("ConsequencesTitle")}</li>
                <li>{t("Consequence1")}</li>
                <li>{t("Consequence2")}</li>
                <li>{t("Consequence3")}</li>
                <li>{t("Consequence4")}</li>
                <li>{t("Consequence5")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("NoticePolicyTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("NoticePolicyIntro")}</li>
                <li>{t("InfoRequired1")}</li>
                <li>{t("InfoRequired2")}</li>
                <li>{t("InfoRequired3")}</li>
                <li>{t("NoticeActions")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("DissolutionTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("DissolutionStopUsing")}</li>
                <li>{t("DissolutionDeletingApp")}</li>
                <li>{t("DissolutionBreakRules")}</li>
                <li>{t("DissolutionWithdrawPlatform")}</li>
                <li>{t("DissolutionDeleteContent")}</li>
                <li>{t("DissolutionObligations")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("ChangesToDocumentsTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("ChangesToDocumentsVersion")}</li>
                <li>{t("ChangesToDocumentsReasons")}</li>
                <li>{t("ChangesToDocumentsNotification")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("OurRelationshipWithYouTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("RelationshipTermsOnly")}</li>
                <li>{t("RelationshipAgreement")}</li>
                <li>{t("RelationshipRights")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("AppleAppStoreProvisionsTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("AppleTermsAgreement")}</li>
                <li>{t("AppleNoObligation")}</li>
                <li>{t("AppleNotResponsibleForClaims")}</li>
                <li>{t("AppleIntellectualPropertyClaims")}</li>
                <li>{t("AppleThirdPartyBeneficiaries")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("OtherAppPlatformsTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("OtherAppPlatformsIntroduction")}</li>
                <li>{t("OtherAppPlatformsAcknowledgement")}</li>
                <li>{t("OtherAppPlatformsCompliance")}</li>
                <li>{t("OtherAppPlatformsDistribution")}</li>
                <li>{t("OtherAppPlatformsResponsibility")}</li>
                <li>{t("OtherAppPlatformsLiability")}</li>
                <li>{t("OtherAppPlatformsThirdPartyBeneficiary")}</li>
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("LawTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("LawDisputes")}</li>
               
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("ContactFeedbackComplaintsTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("ContactEmail")}</li>
                <li>{t("FeedbackValue")}</li>
               
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("CancellationsPolicyTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("CancellationsAfterShipment")}</li>
                <li>{t("CancellationsWithin48Hours")}</li>
               
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("ModificationTermsExchangesReturnsPolicyTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("ModificationTermsNotification")}</li>
                <li>{t("ModificationTermsDiscontinuation")}</li>
               
            </ol>
        </div>

        <div className="p-6 text-[1rem] rounded-lg shadow-sm bg-white  ">
            <p className="text-xl sm:text-2xl text-red font-bold py-2">{t("ReferralProgramTermsTitle")}</p>
            <ol className=" order-last px-2">
                <li>{t("ReferralEligibilityTitle")}</li>
                <li>{t("ReferralEligibilityRequirements")}</li>
                <li>{t("ReferralEligibilityRegistration")}</li>
                <li>{t("ReferralParticipationTitle")}</li>
                <li>{t("ReferralSubmission")}</li>
                <li>{t("ReferralUsage")}</li>
                <li>{t("ReferralSignUp")}</li>
                <li>{t("ReferralRewards")}</li>
            </ol>
        </div>

      </div>
    </section>
  )
}

export default Conditions