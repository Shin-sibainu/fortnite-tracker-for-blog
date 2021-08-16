import React, { useState } from "react";
import { FormInput } from "./input/FormInput";
import { Title } from "./title/Title";
import { Cards } from "./card/Cards";

export const Main = () => {
  //useStateでsoloDataの状態管理。
  const [soloData, setSoloData] = useState(null);
  console.log(soloData);
  return (
    <div>
      <Title />
      {/* propsでFormInputコンポーネントにsetSoloDataを渡す */}
      <FormInput setSoloData={setSoloData} />
      <div className="cardArea">
        <Cards />
      </div>
    </div>
  );
};
