import { FC, memo } from "react";

import { GlobalSvgSelector } from "@/assets/icons/global/GlobalSvgSelector";
import { Tab, TabSwitcher } from "@/components/tab-switcher";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider/slider";
import { TextField } from "@/components/ui/textField";

import s from "./filter-control.module.scss";

type Props = {
  authUserId: string;
  searchName: string;
  setSearchName: (newString: string) => void;
  setSliderValue: (newValue: number[]) => void;
  setTabValue: (newTab: string) => void;
  sliderMaxValue?: number;
  sliderValue: (null | number)[];
  tabValue: string;
};

export const FilterControls: FC<Props> = memo(
  ({
    authUserId,
    searchName,
    setSearchName,
    setSliderValue,
    setTabValue,
    sliderMaxValue = 10,
    sliderValue,
    tabValue,
  }) => {
    const tabs: Tab[] = [
      { text: "My cards", value: authUserId },
      { text: "All cards", value: "" },
    ];

    const clearFilterHandler = () => {
      setSliderValue([0, sliderMaxValue]);
      setSearchName("");
      setTabValue("");
    };

    // const onClearTextField = () => {
    //     setSearchName('')
    // }

    return (
      <div className={s.filter}>
        <TextField
          className={s.textField}
          onChange={(e) => setSearchName(e.currentTarget.value)}
          type={"search"}
          value={searchName}
        />
        <TabSwitcher
          label={"Show packs cards"}
          onValueChange={setTabValue}
          tabs={tabs}
          value={tabValue}
        />
        <Slider
          label={"Number of cards"}
          max={sliderMaxValue}
          min={0}
          onChange={setSliderValue}
          value={sliderValue}
        />
        <Button
          className={s.clearButton}
          onClick={clearFilterHandler}
          variant={"secondary"}
        >
          <GlobalSvgSelector id={"trash-bin"} />
          Clear Filter
        </Button>
      </div>
    );
  },
);
