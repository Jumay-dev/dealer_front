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
  const [clinicInn, setClinicInn] = React.useState("555 666 777 888 000");
  const [clinicAddress, setClinicAddress] = React.useState(
    "г.Москва, ул.Пушкина, д.2"
  );
  const [clinicName, setClinicName] = React.useState("Добромед");
  const [clinicUr, setClinicUr] = React.useState('ООО "Добромед"');
  const [dealerInn, setDealerInn] = React.useState("555 666 777 888 000");
  const [dealerAddress, setDealerAddress] = React.useState(
    "г.Москва, ул.Пушкина, д.2"
  );
  const [dealerName, setDealerName] = React.useState("Добромед");
  const [dealerUr, setDealerUr] = React.useState('ООО "Добромед"');

  const callApi = (inn) => {
    console.log(inn);
    getClinicReq(inn.split(" ").join("").trim())
      .then((res) => res.json())
      .then((res) => {
        const resFromBack = res.result.result;
        if (res.result.result.success) {
          setClinicName(resFromBack.clinic.TITLE);
        }
      });
  };
  const [debouncedCallApi] = React.useState(() =>
    _.debounce((inn) => callApi(inn), 1000)
  );

  const onInnChange = (inn) => {
    setClinicInn(inn);
    debouncedCallApi(inn);
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
