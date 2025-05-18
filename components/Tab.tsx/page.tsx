import React from "react";
interface tabType {
  id: number;
  title: string;
  selectedItem: any;
  setSelectedItem: any;
}
const Tab = ({ tabItem, selectedItem, setSelectedItem }: any) => {
  return (
    <div className="flex gap-2">
      {tabItem?.map((item: any) => (
        <div
          key={item?.id}
          role="button"
          onClick={() => setSelectedItem(item?.id)}
          className={`px-1 ${
            selectedItem === item?.id
              ? "text-red-500 border-b-2 border-red-500"
              : ""
          }`}
        >
          {item?.title}
        </div>
      ))}
    </div>
  );
};

export default Tab;
