import EnrollCrouseCard from "./EnrollCrouseCard";

const MyClass = () => {
  return (
    <div>
      <div className="my-16 md:w-10/12 mx-auto grid grid-cols-2 gap-10">
        <EnrollCrouseCard />
        <EnrollCrouseCard />
        <EnrollCrouseCard />
      </div>
    </div>
  );
};

export default MyClass;
