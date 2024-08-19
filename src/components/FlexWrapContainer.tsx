const FlexWrapContainer = ({ children, marginValue = 4 }) => {
  const marginClass = `[&>*]m-${marginValue}`;
  const negativeMarginClass = `-m-${marginValue}`;

  return (
    <div className={`flex flex-wrap ${marginClass} ${negativeMarginClass}`}>
      {children}
    </div>
  );
};

export default FlexWrapContainer;
