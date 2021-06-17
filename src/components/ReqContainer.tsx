import React from "react";
import NewProjectReq from "../components/NewProjectReq";
import AdditionalDealerReq from "../components/AdditionalDealerReq";
import { getClinicReq } from "../middleware/api";
import _ from "lodash";

export default function ReqContainer({
  allTools,
  handleNewProject,
  openPresend,
  setOpenPresend,
}) {
  const [showAdditionalReq, setShowAdditionalReq] = React.useState(false);
  const [clinicInn, setClinicInn] = React.useState<string>("");
  const [clinicLoading, setClinicLoading] = React.useState<boolean>(false)
  const [clinicAddress, setClinicAddress] = React.useState<string>("");
  const [clinicName, setClinicName] = React.useState<string>("");
  const [clinicUr, setClinicUr] = React.useState<string>('');
  const [clinicUrAddress, setClinicUrAddress] = React.useState<string>('');
  const [dealerInn, setDealerInn] = React.useState<string>("");
  const [dealerAddress, setDealerAddress] = React.useState<string>("");
  const [dealerName, setDealerName] = React.useState<string>("");
  const [dealerUr, setDealerUr] = React.useState<string>('');

  const callApi = (inn) => {
    console.log(inn);
    setClinicLoading(true)
    getClinicReq(inn.split(" ").join("").trim())
      .then((res) => res.json())
      .then((res) => {
        setClinicLoading(false)
        const resFromBack = res.result.result;
        if (res.result.result.success) {
          setClinicName(resFromBack.clinic.TITLE);
          setClinicUr(resFromBack.clinic.RQ_COMPANY_NAME)
          setClinicUrAddress(`${resFromBack.clinic.CITY} ${resFromBack.clinic.ADDRESS_1} ${resFromBack.clinic.ADDRESS_2}`)
          setClinicAddress(`${resFromBack.clinic.CITY} ${resFromBack.clinic.ADDRESS_1} ${resFromBack.clinic.ADDRESS_2}`)
        }
      });
  };
  const [debouncedCallApi] = React.useState(() =>
    _.debounce((inn) => callApi(inn), 1000)
  );

  const onInnChange = (inn:string) => {
    setClinicInn(inn);
    if (inn.length > 9) {
      debouncedCallApi(inn);
    }
  };

  return (
    <div>
      <NewProjectReq
        allTools={allTools}
        handleNewProject={handleNewProject}
        openPresend={openPresend}
        setOpenPresend={setOpenPresend}
        showAdditionalReq={showAdditionalReq}
        setShowAdditionalReq={setShowAdditionalReq}
        clinicInn={clinicInn}
        setClinicInn={onInnChange}
        clinicAddress={clinicAddress}
        setClinicAddress={setClinicAddress}
        clinicName={clinicName}
        setClinicName={setClinicName}
        clinicUr={clinicUr}
        setClinicUr={setClinicUr}
        dealerInn={dealerInn}
        setDealerInn={setDealerInn}
        dealerAddress={dealerAddress}
        setDealerAddress={setDealerAddress}
        dealerName={dealerName}
        setDealerName={setDealerName}
        dealerUr={dealerUr}
        setDealerUr={setDealerUr}
        clinicLoading={clinicLoading}
        clinicUrAddress={clinicUrAddress}
        setClinicUrAddress={setClinicUrAddress}
      />
      {showAdditionalReq ? (
        <AdditionalDealerReq
          dealerInn={dealerInn}
          setDealerInn={setDealerInn}
          dealerAddress={dealerAddress}
          setDealerAddress={setDealerAddress}
          dealerName={dealerName}
          setDealerName={setDealerName}
          dealerUr={dealerUr}
          setDealerUr={setDealerUr}
        />
      ) : null}
    </div>
  );
}
