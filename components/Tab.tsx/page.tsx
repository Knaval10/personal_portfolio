import React from "react";

interface TabItem {
  id: number;
  title: string;
}

interface TabProps {
  tabItem: TabItem[];
  selectedItem: number;
  setSelectedItem: (id: number) => void;
}

const Tab: React.FC<TabProps> = ({
  tabItem,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <div className="flex gap-2">
      {tabItem?.map((item) => (
        <div
          key={item.id}
          role="button"
          tabIndex={0} // for accessibility
          onClick={() => setSelectedItem(item.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedItem(item.id);
            }
          }}
          className={`px-1 cursor-pointer ${
            selectedItem === item.id
              ? "text-red-500 border-b-2 border-red-500"
              : ""
          }`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Tab;
