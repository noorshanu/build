import { useState } from "react";
import ReviewBox from "./ReviewBox";
import { twMerge } from "tailwind-merge";

// TabButton component
const TabButton = ({ label, onClick, isActive }) => {
  return (
    <button
      className={twMerge(
        "bg-tranparent border-1 rounded-3xl border-woodsmoke-600 px-6 py-2",
        isActive ? "bg-woodsmoke-300 dark:bg-woodsmoke-600" : null
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Tabs component
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div>
      <div className="tab-buttons flex items-center gap-4 mb-4">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <TabButton
              key={label}
              label={label}
              isActive={activeTab === label}
              onClick={() => setActiveTab(label)}
            />
          );
        })}
      </div>

      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

function ReviewClients() {
  return (
    <>
      <div>
        <h1 className="text-3xl mb-4 mt-1">{"Client's"} Reviews</h1>
        <div>
          <Tabs>
            <div label="As a Freelancer">
              <ReviewBox />
              <ReviewBox />
              <ReviewBox />
              <ReviewBox />
              <ReviewBox />
            </div>
            <div label="As a Job seeker">
              Content for Tab 2
              <ReviewBox />
            </div>
            {/* <div label="Tab 3">
        Content for Tab 3
      </div> */}
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default ReviewClients;
