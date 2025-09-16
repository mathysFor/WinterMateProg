const HowItWorksHeader = ({ title, className, divClassName }) => {
  
    return (
         <div className={`relative text-center py-10 z-50 ${divClassName}`}>
        <h2  className={`inline-block px-4  rounded text-[22px] lg:text-[32px] bg-[#008CFF] z-50 font-bold text-white ${className}`}>
          {title ? title : 'Pourquoi acheter ce programme ?'}
        </h2>
      </div>
    );
  };
  
  export default HowItWorksHeader;